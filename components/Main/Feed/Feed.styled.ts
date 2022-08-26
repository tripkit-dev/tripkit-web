import styled from '@emotion/styled'

import { css } from '@emotion/react'

export const Container = styled.section`
  position: relative;
  width: calc(100% - 52px);
  height: 75vh;
  max-height: 633px;
  padding: 26px;

  overflow: hidden;

  * {
    z-index: 1;
  }
`

export const Inner = styled.div`
  position: relative;

  width: 100%;
  max-width: 338px;
  height: calc(100% - 92px);
  margin: 0 auto;
  padding: 40px 0 52px 0;
`

export const BgImgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
