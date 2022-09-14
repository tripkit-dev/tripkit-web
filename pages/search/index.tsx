import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'

import type { GetServerSideProps, NextPage } from 'next'

import { HotPlace as HotPlaceType } from 'types/HotPlace'

import { hotPlaceApi } from 'apis/hotPlace'
import { searchState } from 'atoms/search'
import { withExtractData } from 'libraries/query'

import { Header } from '@components/layout'

const DEFAULT_PAGE_TITLE = '탐색'

const Search: NextPage = () => {
  const searchValue = useRecoilValue(searchState)

  return (
    <>
      <Header center={searchValue || DEFAULT_PAGE_TITLE} />
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['hotPlace/get'], () =>
    withExtractData<HotPlaceType[]>(hotPlaceApi.get)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
