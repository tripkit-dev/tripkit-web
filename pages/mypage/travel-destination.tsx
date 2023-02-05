import type { GetServerSideProps, NextPage } from 'next'
import { useCallback } from 'react'
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query'

import { travelDestinationApi } from '@shared/apis'
import { InfiniteScroll } from '@shared/components'
import useQueryParams from '@shared/hooks/useQueryParams'
import { combineQuery, routes, withExtractData } from '@shared/libraries'
import {
  Pagination,
  TravelDestination as TravelDestinationType
} from '@shared/types'

import {
  InviteCardBottom,
  Layout,
  LikeCardBottom,
  MyPageCard,
  MyPageCards,
  OwnCardBottom
} from '@mypage/components'
import { planNavigationModels } from '@mypage/models'
import {
  ALL_TRAVEL_DESTINATION_CATEGORIES,
  TravelDestinationCategory
} from '@mypage/types'

const DEFAULT_PAGE = 1
const TRAVEL_DESTINATION_KEY = 'travelDestination/pagination'
const DEFAULT_CATEGORY = planNavigationModels[0].key

const TravelDestination: NextPage<Props> = ({ defaultCategory }) => {
  const queryParams = useQueryParams<QueryParams>({
    category: defaultCategory
  })
  // const category =
  //   getQuery<TravelDestinationCategory>('category') || defaultCategory
  const category = queryParams.category

  const {
    data: travelDestinations,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    [TRAVEL_DESTINATION_KEY, category],
    ({ pageParam }) =>
      withExtractData<Response>(travelDestinationApi.get, {
        page: pageParam
      }),
    {
      getNextPageParam: (lastPage: Response) => {
        return lastPage.page < lastPage.totalPages && lastPage.page + 1
      }
    }
  )

  const renderCardBottom = useCallback(
    (destination: TravelDestinationType) => {
      switch (category as TravelDestinationCategory) {
        case 'own':
          return <OwnCardBottom destination={destination} />
        case 'like':
          return <LikeCardBottom />
        case 'invite':
          return <InviteCardBottom destination={destination} />
        case 'share':
          return <OwnCardBottom destination={destination} />
        default:
          return undefined
      }
    },
    [category]
  )

  return (
    <Layout
      outer={
        <MyPageCards>
          {travelDestinations?.pages?.map(({ contents: destinations }) =>
            destinations?.map((destination) => (
              <MyPageCard
                key={destination.id}
                imgSrc={destination.src}
                bottom={renderCardBottom(destination)}
              />
            ))
          )}
          {travelDestinations?.pages && hasNextPage && (
            <InfiniteScroll fetch={fetchNextPage} />
          )}
        </MyPageCards>
      }
    ></Layout>
  )
}

export default TravelDestination

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const defaultCategory = query.category as string
  const isValidCategory = ALL_TRAVEL_DESTINATION_CATEGORIES.find(
    (category) => category === defaultCategory
  )

  if (!isValidCategory) {
    return {
      redirect: {
        destination: combineQuery(routes.mypage.travelDestination.path, {
          category: DEFAULT_CATEGORY
        })
      },
      props: {}
    }
  }

  queryClient.setQueryData([TRAVEL_DESTINATION_KEY, defaultCategory], () => ({
    pageParams: [DEFAULT_PAGE]
  }))

  await queryClient.prefetchInfiniteQuery(
    [TRAVEL_DESTINATION_KEY, defaultCategory],
    ({ pageParam }) =>
      withExtractData<Response>(travelDestinationApi.get, {
        page: pageParam
      }),
    {
      getNextPageParam: (lastPage: Response) => {
        return lastPage.page < lastPage.totalPages && lastPage.page + 1
      }
    }
  )

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      defaultCategory
    }
  }
}

type Response = Pagination<TravelDestinationType[]>

interface Props {
  defaultCategory: TravelDestinationCategory
}

type QueryParams = {
  category: TravelDestinationCategory
}
