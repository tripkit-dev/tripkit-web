import styled from '@emotion/styled'

import React from 'react'

import Navigation from './Navigation'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Container>{children}</Container>
      <Navigation />
    </>
  )
}

const Container = styled.section`
  padding-bottom: 90px;
`
