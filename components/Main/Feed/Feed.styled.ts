import styled from '@emotion/styled'

import { color } from '@constants/color'

export const Container = styled.section`
  width: 100%;
  height: 75vh;
  max-height: 633px;
  padding: 26px;

  background: ${color.gray02} url(/images/bg_feed.png) no-repeat;
  background-size: cover;
`

export const Inner = styled.div`
  position: relative;

  width: 100%;
  max-width: 338px;
  height: calc(100% - 92px);
  margin: 0 auto;
  padding: 40px 0 52px 0;
`
