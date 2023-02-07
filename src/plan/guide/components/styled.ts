import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Button, Text } from '@shared/components'
import { color } from '@shared/constants'

export const XControlDiv = styled.div<{ x: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${({ x }) => css`
    transform: translateX(${x}px);
  `};
`

export const Content = styled.div<{ isTop?: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 76vw;
  max-width: 600px;
  bottom: 320px;

  p {
    display: block;
  }

  ${({ isTop }) =>
    isTop
      ? css`
          top: 140px;
          bottom: auto;
        `
      : ''}
`

export const Logo = styled(Text)`
  color: ${color.main};
  margin-bottom: 32px;
`

export const WhiteText = styled(Text)`
  color: ${color.white};
`

export const Rotate = styled.span`
  position: absolute;
  transform: rotate(-25deg) translate(10px, -2px);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.32);
`

export const Big = styled.span`
  font-size: 48px;
  margin-left: 8px;
`

export const Submit = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  width: 78vw;
  height: 60px;
  transform: translateX(-50%);
  max-width: 600px;
  bottom: 64px;
  font-size: 17px;
  font-weight: 400;
`
