import styled from '@emotion/styled'

import { color } from '@constants/color'

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
