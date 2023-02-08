import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'

import { Header } from '@shared/components'
import { Back } from '@shared/components/layout/Header'
import { useWindowSize } from '@shared/hooks'

import { First, Second, Third } from '@guide/components'

export default function Guide() {
  const { back } = useRouter()
  const { width } = useWindowSize()
  const [step, setStep] = useState<number>(0)

  const prev = () => {
    if (step <= 0) {
      back()
      return
    }

    setStep((prev) => prev - 1)
  }

  const next = () => {
    if (MAX_STEP - 1 <= step) return

    setStep((prev) => prev + 1)
  }

  return (
    <>
      <Header left={<Back white transparent customBack={prev} />} float />
      <Container x={step * (width || 0)}>
        <First next={next} />
        <Second next={next} />
        <Third />
      </Container>
    </>
  )
}

Guide.getLayout = (page: ReactElement) => <>{page}</>

const MAX_STEP = 3

const Container = styled.section<{ x?: number }>`
  width: 300vw;
  height: 100vh;
  overflow: hidden;

  ${({ x }) => css`
    transform: translateX(-${x}px);
    transition: transform 0.3s;
  `}
`
