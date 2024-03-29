import styled from '@emotion/styled'

import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { travelDestinationApi } from '@shared/apis'
import { searchState } from '@shared/atoms'
import {
  Button,
  CategorySelector,
  Header,
  InfiniteScroll,
  NotFound
} from '@shared/components'
import { useVirtualList } from '@shared/hooks'
import { routes, withExtractData } from '@shared/libraries'
import {
  Pagination,
  TravelDestination as TravelDestinationType
} from '@shared/types'

import { SearchPlaceCategory } from '@search/types'

import Form from './Form'
import Place from './Place'
import Recommended from './Recommended'

const DEFAULT_CATEGORY: SearchPlaceCategory = 'cafe'

export default function Places() {
  const { query } = useRouter()
  const searchValue = useRecoilValue(searchState)

  const category = (query.category as SearchPlaceCategory) || DEFAULT_CATEGORY
  const keyword = (query.keyword as string) || ''

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
  const rd = useMemo(() => Math.random(), [category])

  const mergedList = useMemo(
    () => (rd > 0.5 ? mergePagesToArray(totalPlaces?.pages) : []),
    [totalPlaces, rd]
  )

  const { ref, list, totalHeight, offsetY, onFetchSuccess, onScrollTop } =
    useVirtualList<TravelDestinationType>({
      totalList: mergedList
    })

  useEffect(() => {
    onScrollTop()
  }, [keyword, category, onScrollTop])

  const top = (
    <>
      <Header center={searchValue || '탐색'} />
      <Form />
      <CategorySelector />
    </>
  )

  return (
    <>
      {mergedList.length > 0 ? (
        <VirtualList ref={ref}>
          {top}
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
      ) : (
        <>
          {top}
          <NotFound
            value={keyword}
            title="찾으시는 장소가 없어요"
            description="더 많은 장소를 알려주세요!"
            bottom={
              <Link href={routes.places.enroll.path}>
                <a>
                  <SEnrollButton>장소 알리기</SEnrollButton>
                </a>
              </Link>
            }
          />
        </>
      )}
    </>
  )
}

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
  height: calc(100% - 76px);
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

const SEnrollButton = styled(Button)`
  width: 150px;
`

type Response = Pagination<TravelDestinationType[]>
