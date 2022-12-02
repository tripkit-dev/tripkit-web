import React from 'react'
import { dehydrate, QueryClient } from 'react-query'

import type { GetServerSideProps, NextPage } from 'next'

import { Feed, Festival, HotPlace, RecommendedPlace } from '@home/components'
import { hotPlaceApi } from '@shared/apis/hotPlace'
import { HotPlace as HotPlaceType } from '@shared/types/HotPlace'

const Home: NextPage = () => {
  return (
    <>
      <Feed />
      <HotPlace />
      <RecommendedPlace />
      <Festival />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['hotPlace/get'],
    () => hotPlaceApi.get() as Promise<HotPlaceType[]>
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
