import styled from '@emotion/styled'

import { useEffect, useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'

import { useRouter } from 'next/router'

import { SearchPlaceCategory } from '@search/types'
import { travelDestinationApi } from '@shared/apis'
import { InfiniteScroll } from '@shared/components'
import { useVirtualList } from '@shared/hooks'
import { withExtractData } from '@shared/libraries'
import { Pagination } from '@shared/types'
import { TravelDestination as TravelDestinationType } from '@shared/types'

import Place from './Place'
import Recommended from './Recommended'

const DEFAULT_CATEGORY: SearchPlaceCategory = 'cafe'

type Response = Pagination<TravelDestinationType[]>
const Places = () => {
  const { query } = useRouter()

  const category = (query.category as SearchPlaceCategory) || DEFAULT_CATEGORY
  const keyword = query.keyword || ''

  const {
    data: totalPlaces,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery(
    ['place/pagination', category, keyword],
    ({ pageParam }) =>
      withExtractData<Response>(travelDestinationApi.get, {
        page: pageParam
      }),
    {
      getNextPageParam: (lastPage: Response) => {
        return lastPage.page < lastPage.totalPages && lastPage.page + 1
      },
      onSuccess: (data) => {
        const dataArray = mergePagesToArray(data.pages)

        onFetchSuccess(dataArray)
      }
    }
  )

  const mergedList = useMemo(
    () => mergePagesToArray(totalPlaces?.pages),
    [totalPlaces]
  )

  const { ref, list, totalHeight, offsetY, onFetchSuccess, onScrollTop } =
    useVirtualList<TravelDestinationType>({
      totalList: mergedList
    })

  useEffect(() => {
    onScrollTop()
  }, [keyword, category, onScrollTop])

  return (
    <VirtualList ref={ref}>
      <Recommended />

      <Container height={totalHeight}>
        <SPlaces offsetY={offsetY}>
          {list.map((place) => (
            <Place key={place.id} place={place} />
          ))}
          {totalPlaces?.pages && hasNextPage && (
            <InfiniteScroll fetch={fetchNextPage} />
          )}
        </SPlaces>
      </Container>
    </VirtualList>
  )
}

export default Places

function mergePagesToArray(pages?: Response[]) {
  if (!pages?.length) return []

  let newArray: TravelDestinationType[] = []

  pages.forEach((page) => {
    newArray = [...newArray, ...page.contents]
  })

  return newArray as TravelDestinationType[]
}

const VirtualList = styled.main`
  position: absolute;
  width: 100%;
  max-width: 720px;
  left: 50%;
  transform: translateX(-50%);
  height: calc(100% - 276px);
  overflow-y: scroll;
`

const Container = styled.div<{ height: number }>`
  position: absolute;
  width: 100%;
  height: ${(props) => props.height}px;
`

const SPlaces = styled.ul<{ offsetY: number }>`
  margin-top: 4px;
  transform: translateY(${(props) => props.offsetY}px);
`
