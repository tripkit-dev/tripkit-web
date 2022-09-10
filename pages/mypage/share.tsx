import React from 'react'
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query'

import type { GetServerSideProps, NextPage } from 'next'

import { Size as TextSize } from '@enums/Text'

import { Pagination } from 'types/Response'
import { TravelDestination } from 'types/TravelDestination'

import { travelDestinationApi } from 'apis/travelDestination'
import { withExtractData } from 'libraries/query'

import { Text } from '@components/common'
import InfiniteScroll from '@components/InfiniteScroll'
import { MyPageCards, MyPageLayout } from '@components/MyPage'

const DEFAULT_PAGE = 1
const TRAVEL_DESTINATION_KEY = 'travelDestination/pagination'

type Response = Pagination<TravelDestination[]>

const Share: NextPage = () => {
  const {
    data: travelDestinations,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    [TRAVEL_DESTINATION_KEY],
    ({ pageParam }) =>
      withExtractData<Response>(travelDestinationApi.get, {
        page: pageParam
      }),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage: Response) => {
        return lastPage.page < lastPage.totalPages && lastPage.page + 1
      }
    }
  )

  return (
    <MyPageLayout
      outer={
        <MyPageCards>
          {travelDestinations?.pages?.map(({ contents: destinations }) =>
            destinations?.map((destination) => (
              <MyPageCards.Card
                key={destination.id}
                imgSrc={destination.src}
                bottom={
                  <>
                    <MyPageCards.Heart count={destination.likes} />
                    <Text size={TextSize.SMALL} lineClamp={1}>
                      {destination.title}
                    </Text>
                  </>
                }
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

export default Share

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  queryClient.setQueryData([TRAVEL_DESTINATION_KEY], () => ({
    pageParams: [DEFAULT_PAGE]
  }))

  await queryClient.prefetchInfiniteQuery(
    [TRAVEL_DESTINATION_KEY],
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
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  }
}
