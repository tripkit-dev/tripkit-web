import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Text } from '@shared/components'
import { color } from '@shared/constants'

interface Props {
  top: {
    title: string
    right?: React.ReactNode
  }
  middle?: {
    description?: string
    element?: React.ReactNode
  }
  bottom?: {
    description?: string
    element?: React.ReactNode
  }
}

export default function FormRow({ top, middle, bottom }: Props) {
  return (
    <SForm>
      <STop>
        <Text color={color.gray05} fontWeight="500">
          {top.title}
        </Text>
        {top.right}
      </STop>
      {middle?.description && (
        <Text size="xsmall" color={color.gray06}>
          {middle.description}
        </Text>
      )}
      {middle?.element && <SContent>{middle.element}</SContent>}
      {bottom?.description && (
        <Text
          size="xsmall"
          color={color.gray06}
          css={css`
            margin-top: 10px;
          `}
        >
          {bottom.description}
        </Text>
      )}
      {bottom?.element && <SContent>{bottom.element}</SContent>}
    </SForm>
  )
}

const SForm = styled.section`
  margin-top: 16px;
  padding: 16px;
  background-color: ${color.gray08};

  &:first-of-type {
    margin-top: 0;
  }
`

const STop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SContent = styled.div`
  margin-top: 10px;
`
