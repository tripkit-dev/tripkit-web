import styled from '@emotion/styled'

import React from 'react'

import type { NextPage } from 'next'

import { Header } from '@components/common'
import { Profile } from '@components/MyPage'

const MyPage: NextPage = () => {
  return (
    <>
      <Header center="마이페이지" />
      <Container>
        <Profile />
      </Container>
    </>
  )
}

export default MyPage

const Container = styled.section`
  padding: 46px;
`
