import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'

import type { GetServerSideProps, NextPage } from 'next'

import { Categories, Form, Places } from '@search/components'
import { hotPlaceApi } from '@shared/apis'
import { searchState } from '@shared/atoms/search'
import { Header } from '@shared/components/layout'
import { getQuery } from '@shared/libraries'
import { searchCategoryModels } from '@shared/models/category'
import { HotPlace as HotPlaceType } from '@shared/types'
import { Category } from '@shared/types'

const DEFAULT_CATEGORY = searchCategoryModels[0]

const Search: NextPage<Props> = ({ defaultCategoryKey }) => {
  const searchValue = useRecoilValue(searchState)

  const currentCategoryKey = getQuery('category', defaultCategoryKey)
  const currentCategory = searchCategoryModels.find(
    (category) => category.key === currentCategoryKey
  ) as Category

  return (
    <>
      <Header center={searchValue || '탐색'} />
      <Form />
      <Categories currentCategory={currentCategory} />
      <Places />
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const { category } = query

  await queryClient.prefetchQuery(
    ['hotPlace/get', category || DEFAULT_CATEGORY.key],
    () => hotPlaceApi.get() as Promise<HotPlaceType[]>
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      defaultCategoryKey: category || DEFAULT_CATEGORY.key
    }
  }
}

interface Props {
  defaultCategoryKey: string
}
