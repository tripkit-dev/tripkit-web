import React from 'react'

import type { NextPage } from 'next'

import { Feed, HotPlace } from '@components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Feed />
      <HotPlace />
    </>
  )
}

export default Home
