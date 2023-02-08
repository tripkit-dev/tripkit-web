import type { GetServerSideProps } from 'next'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'

import { hotPlaceApi } from '@shared/apis'
import { searchState } from '@shared/atoms/search'
import { CategorySelector } from '@shared/components'
import { Header } from '@shared/components/layout'
import { HotPlace } from '@shared/types'

import { Form, Places } from '@search/components'
import { searchCategoryModels } from '@search/models'

const DEFAULT_CATEGORY = searchCategoryModels[0]

export default function Search() {
  const searchValue = useRecoilValue(searchState)

  return (
    <>
      <Header center={searchValue || '탐색'} />
      <Form />
      <CategorySelector />
      <Places />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const { category } = query

  await queryClient.prefetchQuery(
    ['hotPlace/get', category || DEFAULT_CATEGORY.key],
    () => hotPlaceApi.get() as Promise<HotPlace[]>
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
