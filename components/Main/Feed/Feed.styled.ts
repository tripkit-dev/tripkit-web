import styled from '@emotion/styled'

import { color } from '@constants/color'
import { css } from '@emotion/react'

export const Container = styled.section`
  width: calc(100% - 52px);
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

export const Profile = styled.div`
  width: calc(100% - 4px);
  padding-right: 16px;
  text-align: right;
`

export const Weather = styled.div`
  width: 100%;
  margin-top: 40px;

  text-align: center;
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 146px;
  margin: 8px auto;
  padding: 5px 18px;
  border-radius: 16px;

  background-color: ${color.white};

  text-align: center;
  font-size: 14px;
  font-weight: 500;
`

export const Status = styled.span`
  margin-left: 4px;

  color: ${color.main};
  font-size: 18px;
  font-weight: 600;
`

export const whiteImgStyle = css`
  filter: brightness(0) invert(1);
`

export const formStyle = css`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  text-align: center;

  button {
    margin-top: 24px;
  }
`
