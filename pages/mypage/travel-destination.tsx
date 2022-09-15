import { useCallback } from 'react'
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query'

import type { GetServerSideProps, NextPage } from 'next'

import { TravelDestinationCategory } from '@enums/Category'

import { Pagination } from 'types/Response'
import { TravelDestination as TravelDestinationType } from 'types/TravelDestination'

import { travelDestinationApi } from 'apis/travelDestination'
import { combineQuery, getQuery, withExtractData } from 'libraries/query'
import { routes } from 'libraries/routes'
import { planNavigationModels } from 'models/planNavigation'

import InfiniteScroll from '@components/InfiniteScroll'
import {
  InviteCardBottom,
  LikeCardBottom,
  MyPageCard,
  MyPageCards,
  MyPageLayout,
  OwnCardBottom
} from '@components/MyPage'

const DEFAULT_PAGE = 1
const TRAVEL_DESTINATION_KEY = 'travelDestination/pagination'
const DEFAULT_CATEGORY = planNavigationModels[0].key

type Response = Pagination<TravelDestinationType[]>

interface Props {
  defaultCategory: TravelDestinationCategory
}

const TravelDestination: NextPage<Props> = ({ defaultCategory }) => {
  const category =
    getQuery<TravelDestinationCategory>('category') || defaultCategory

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
      switch (category) {
        case TravelDestinationCategory.OWN:
          return <OwnCardBottom destination={destination} />
        case TravelDestinationCategory.LIKE:
          return <LikeCardBottom />
        case TravelDestinationCategory.INVITE:
          return <InviteCardBottom destination={destination} />
        case TravelDestinationCategory.SHARE:
          return <OwnCardBottom destination={destination} />
        default:
          return undefined
      }
    },
    [category]
  )

  return (
    <MyPageLayout
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
    ></MyPageLayout>
  )
}

export default TravelDestination

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const defaultCategory = query.category as string
  const isValidCategory = Object.values(TravelDestinationCategory).find(
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
