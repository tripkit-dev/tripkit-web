import styled from '@emotion/styled'

import { ReactNode } from 'react'

import { Img, Text } from '@shared/components'
import { color } from '@shared/constants'

interface Props {
  iconSrc: string
  text: string
  right?: ReactNode
}

export default function InfoRow({ iconSrc, text, right }: Props) {
  return (
    <SContainer>
      <Img src={iconSrc} sideLength="32px" notSSR />
      <SText fontWeight="400">{text}</SText>

      {right}
    </SContainer>
  )
}

const SContainer = styled.div`
  height: 58px;
  margin-top: 18px;
  padding: 4px 16px 4px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.white};
`

const SText = styled(Text)`
  width: calc(100% - 114px);
  padding: 0 12px;
`
