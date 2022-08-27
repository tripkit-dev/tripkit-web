import React from 'react'

import type { NextPage } from 'next'

import { Feed, HotPlace, RecommendedPlace } from '@components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Feed />
      <HotPlace />
      <RecommendedPlace />
    </>
  )
}

export default Home
