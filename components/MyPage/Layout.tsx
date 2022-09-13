import styled from '@emotion/styled'

import React from 'react'

import { Header } from '@components/layout'
import { PlanNavigation, Profile } from '@components/MyPage'

interface Props {
  inner?: React.ReactNode
  outer?: React.ReactNode
}

const Layout: React.FC<Props> = ({ inner, outer }) => {
  return (
    <>
      <Header center="마이페이지" />
      <Container>
        <Profile />
        <PlanNavigation />
        {inner}
      </Container>
      {outer}
    </>
  )
}

export default Layout

const Container = styled.main`
  padding: 46px;
  padding-bottom: 30px;
`
