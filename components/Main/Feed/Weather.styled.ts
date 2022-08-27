import styled from '@emotion/styled'

import { color } from '@constants/color'
import { css } from '@emotion/react'

export const Container = styled.div`
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
