import type { GetServerSideProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { dehydrate, QueryClient } from 'react-query'

import { hotPlaceApi, naverApi } from '@shared/apis'
import { HotPlace as HotPlaceType } from '@shared/types'

import { Feed, Festival, HotPlace, RecommendedPlace } from '@home/components'

const Home: NextPage = () => {
  useEffect(() => {
    naverApi
      .driving({
        start: [127.12345, 37.12345, '출발지이름'],
        goal: [
          [127.10522081658463, 37.35951219616309],
          [128.12345, 38.12345, '장소이름1']
        ]
      })
      .then(console.log)
  }, [])
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
