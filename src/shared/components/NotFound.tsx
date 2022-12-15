import styled from '@emotion/styled'

import { css } from '@emotion/react'

import React from 'react'

import { color } from '@shared/constants'

interface Props {
  value?: string
  title: string
  description?: string
  bottom?: React.ReactNode
}

export default function NotFound({ value, title, description, bottom }: Props) {
  return (
    <SContainer>
      {value && <SValue>&apos;{value}&apos;</SValue>}
      <STitle>{title}</STitle>
      {description && <SDescription>{description}</SDescription>}
      {bottom}
    </SContainer>
  )
}

const margin = css`
  margin-bottom: 18px; ;
`

const SContainer = styled.section`
  height: calc(100vh - 262px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SValue = styled.span`
  color: ${color.main};
  font-size: 16px;
  ${margin};
`

const STitle = styled.h2`
  font-size: 22px;
  color: ${color.lightBlack};
  ${margin};
`

const SDescription = styled.h3`
  font-size: 12px;
  color: ${color.gray02};
  ${margin};
`
