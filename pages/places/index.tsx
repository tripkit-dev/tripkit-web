import type { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'

import { hotPlaceApi } from '@shared/apis'
import { HotPlace } from '@shared/types'

import { Places } from '@search/components'
import { searchCategoryModels } from '@search/models'

const DEFAULT_CATEGORY = searchCategoryModels[0]

export default function PlacesPage() {
  return <Places />
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
