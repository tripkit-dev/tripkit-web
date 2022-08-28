import styled from '@emotion/styled'

import React from 'react'

import { Size as TextSize } from '@enums/Text'

import { color } from '@constants/color'

import { Text } from '@components/common'

interface Props {
  title: string
  subTitle?: string
  hasMore?: boolean
}

export default function SectionTitle({ title, subTitle, hasMore }: Props) {
  return (
    <>
      <Container>
        {subTitle && (
          <Text size={TextSize.SMALL} color={color.gray02}>
            {subTitle}
          </Text>
        )}
        <Title>
          <Text size={TextSize.X_LARGE}>{title}</Text>
          {hasMore && <More>더보기</More>}
        </Title>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: calc(100% - 32px);
  margin-top: 59px;
  margin-bottom: 20px;
  padding: 0 16px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`

const More = styled.button`
  width: 44px;
  height: 44px;
  background-color: #f4f3ff;
  border-radius: 50%;
  color: transparent;

  outline: none;
  border: none;
`
