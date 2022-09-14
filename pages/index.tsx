import React from 'react'
import { dehydrate, QueryClient } from 'react-query'

import type { GetServerSideProps, NextPage } from 'next'

import { HotPlace as HotPlaceType } from 'types/HotPlace'

import { hotPlaceApi } from 'apis/hotPlace'

import { Feed, Festival, HotPlace, RecommendedPlace } from '@components/Main'

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
