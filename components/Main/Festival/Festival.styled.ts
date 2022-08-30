import styled from '@emotion/styled'

import { color } from '@constants/color'
import { css } from '@emotion/react'

export const Cards = styled.ul`
  text-align: center;
`

interface ReadyProps {
  isReady?: boolean
}

export const Status = styled.span<ReadyProps>`
  position: absolute;
  top: -16px;
  right: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  z-index: 9;

  color: ${color.white};
  font-size: 12px;

  ${({ isReady }) =>
    isReady
      ? css`
          background-color: #00c281;
        `
      : css`
          background-color: ${color.main};
        `}
`

export const CardWrapper = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 210px;
  margin-bottom: 30px;
  text-align: center;

  &:first-of-type {
    margin-top: 10px;
  }

  p {
    display: block;
    width: calc(100% - 12px);
    text-align: right;
    padding-right: 12px;

    &:first-of-type {
      margin-top: 24px;
    }
  }
`

export const Location = styled.div<ReadyProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 50px);
  height: 18px;
  padding: 16px 25px;

  ${({ isReady }) =>
    isReady
      ? css`
          background-color: #00c281;
        `
      : css`
          background-color: ${color.main};
        `}
`

export const bottomStyle = css`
  width: 100%;
  left: 0;
  bottom: 0;
`
