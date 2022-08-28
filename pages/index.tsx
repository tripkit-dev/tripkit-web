import React from 'react'

import type { NextPage } from 'next'

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
