import styled from '@emotion/styled'

import React from 'react'

import type { NextPage } from 'next'

import { Header } from '@components/common'
import { PlanNavigation, Profile, PublicNavigation } from '@components/MyPage'

const MyPage: NextPage = () => {
  return (
    <>
      <Header center="마이페이지" />
      <Container>
        <Profile />
        <PlanNavigation />
        <PublicNavigation />
      </Container>
    </>
  )
}

export default MyPage

const Container = styled.section`
  padding: 46px;
`
