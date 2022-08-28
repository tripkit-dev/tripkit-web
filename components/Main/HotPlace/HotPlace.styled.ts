import styled from '@emotion/styled'

import { color } from '@constants/color'
import { css } from '@emotion/react'

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 32px);
  margin-top: 59px;
  margin-bottom: 20px;
  padding: 0 16px;
`

export const More = styled.button`
  width: 44px;
  height: 44px;
  background-color: #f4f3ff;
  border-radius: 50%;
  color: transparent;

  outline: none;
  border: none;
`

export const Cards = styled.ul`
  width: 100%;
  height: 232px;
  overflow: auto;
  white-space: nowrap;
`

export const descriptionStyle = css`
  margin-top: 8px;
  height: 32px;
`

export const cardTitleStyle = css`
  display: block;
  position: relative;
  margin-left: 7px;
  z-index: 9;

  &::before {
    content: ' ';
    position: absolute;
    top: -7px;
    left: -9px;
    width: 20px;
    height: 20px;
    z-index: -1;
    border-radius: 50%;
    background-color: ${color.main};
  }
`
