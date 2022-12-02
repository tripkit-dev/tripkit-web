import styled from '@emotion/styled'

import React from 'react'

import { Header } from '@shared/components/layout'

import Profile from './Profile'
import TravelDestinationNavigation from './TravelDestinationNavigation'

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
        <TravelDestinationNavigation />
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
