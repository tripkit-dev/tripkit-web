import styled from '@emotion/styled'

import { css } from '@emotion/react'

export const Menu = styled.li`
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
