import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { color } from '@shared/constants'

export const Container = styled.section`
  min-height: 149px;
  padding-top: 32px;
  text-align: center;

  @media screen and (min-width: 720px) {
    min-height: auto;
    height: 92px;
  }
`

export const Navigation = styled.ul`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 32px;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    left: -1%;
    bottom: 0;
    width: 102%;
    height: 1px;
    border-bottom: 2px solid ${color.gray04};
  }

  @media screen and (min-width: 550px) {
    width: 440px;
  }

  @media screen and (min-width: 720px) {
    width: auto;
    height: 58px;
  }
`

interface MenuProps {
  active: boolean
}

export const Menu = styled.li<MenuProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 132px;
  height: 40px;
  margin: 8px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #0800ff33;
  border-radius: 15px;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          background-color: ${color.main};
          color: ${color.white};
        `
      : ''}

  @media screen and (max-width: 550px) {
    width: 40%;
    p {
      font-size: 14px !important;
    }
  }

  @media screen and (max-width: 340px) {
    p {
      font-size: 12px !important;
    }
  }
`

export const iconStyle = css`
  position: absolute;
  top: -10px;
  right: 15px;
`
