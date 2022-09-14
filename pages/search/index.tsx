import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'

import type { GetServerSideProps, NextPage } from 'next'

import { Category } from 'types/Category'
import { HotPlace as HotPlaceType } from 'types/HotPlace'

import { hotPlaceApi } from 'apis/hotPlace'
import { searchState } from 'atoms/search'
import { getQuery, withExtractData } from 'libraries/query'
import { searchCategoryModels } from 'models/category'

import { Header } from '@components/layout'
import { Categories, Form } from '@components/Search'
import Recommended from '@components/Search/Recommended'

const DEFAULT_CATEGORY = searchCategoryModels[0]

interface Props {
  defaultCategoryKey: string
}

const Search: NextPage<Props> = ({ defaultCategoryKey }) => {
  const searchValue = useRecoilValue(searchState)

  const currentCategoryKey = getQuery('category', defaultCategoryKey)
  const currentCategory = searchCategoryModels.find(
    (category) => category.key === currentCategoryKey
  ) as Category

  return (
    <>
      <Header center={searchValue || DEFAULT_CATEGORY.label} />
      <Form />
      <Categories currentCategory={currentCategory} />
      <Recommended currentCategory={currentCategory} />
    </>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const { category } = query

  await queryClient.prefetchQuery(
    ['hotPlace/get', category || DEFAULT_CATEGORY.key],
    () => withExtractData<HotPlaceType[]>(hotPlaceApi.get)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      defaultCategoryKey: category || DEFAULT_CATEGORY.key
    }
  }
}
