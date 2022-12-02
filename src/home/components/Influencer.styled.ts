import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { color } from '@shared/constants/color'

export const Influencer = styled.div`
  position: relative;
  width: calc(100% - 66px);
  height: 68px;
  padding: 16px 33px;

  &::before {
    content: ' ';
    width: 100vw;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${color.gray04};
  }

  p {
    position: absolute;
    left: 117px;

    &:first-of-type {
      bottom: 50px;
      font-weight: 500;
    }

    &:last-of-type {
      bottom: 18px;
      font-weight: 300;
    }
  }
`

export const Strong = styled.strong`
  color: ${color.main};
`

export const Cards = styled.ul`
  width: 100%;
  height: 204px;
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 19px;
`

export const Heart = styled.button`
  width: 100%;
  padding: 0;
  background: none;
  text-align: right;
`

export const imgStyle = css`
  position: absolute;
`

export const descriptionStyle = css`
  margin-top: 8px;
  height: 32px;
`
