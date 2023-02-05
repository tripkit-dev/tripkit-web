import type { GetServerSideProps } from 'next'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'

import { hotPlaceApi } from '@shared/apis'
import { searchState } from '@shared/atoms/search'
import { Header } from '@shared/components/layout'
import { useQueryParams } from '@shared/hooks'
import { HotPlace } from '@shared/types'

import { Categories, Form, Places } from '@search/components'
import { searchCategoryModels } from '@search/models'

const DEFAULT_CATEGORY = searchCategoryModels[0]

interface Props {
  defaultCategoryKey: string
}

export default function Search({ defaultCategoryKey }: Props) {
  const searchValue = useRecoilValue(searchState)

  // const currentCategoryKey = getQuery('category', defaultCategoryKey)
  const queryParams = useQueryParams<QueryParams>({
    category: defaultCategoryKey
  })
  const currentCategoryKey = queryParams.category
  const currentCategory = searchCategoryModels.find(
    (category) => category.key === currentCategoryKey
  )

  return (
    <>
      <Header center={searchValue || '탐색'} />
      <Form />
      <Categories currentCategory={currentCategory} />
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
      dehydratedState: dehydrate(queryClient),
      defaultCategoryKey: category || DEFAULT_CATEGORY.key
    }
  }
}

type QueryParams = {
  category: string
}
