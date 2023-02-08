import styled from '@emotion/styled'

import React, { useEffect } from 'react'

import { useAlert } from '@shared/hooks'

import { Alert } from '../popup'
import Navigation from './Navigation'

interface Props {
  children: React.ReactNode
}

let i = 1

export default function Layout({ children }: Props) {
  const handleAlert = useAlert()

  useEffect(() => {
    const a = () => {
      handleAlert(String(i))
      i++
    }

    const intv = setInterval(a, 1300)
    setTimeout(() => {
      a()
    }, 300)
    return () => {
      clearInterval(intv)
    }
  }, [handleAlert])

  return (
    <>
      <Alert />
      <Container>{children}</Container>
      <Navigation />
    </>
  )
}

const Container = styled.article`
  padding-bottom: 76px;
`
