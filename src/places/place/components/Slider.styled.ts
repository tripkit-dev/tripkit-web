import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Text } from '@shared/components'
import { color } from '@shared/constants'
import { whiteImgStyle } from '@shared/styles'

export const Slider = styled.section`
  height: 60vh;
  max-height: 500px;
`

export const BackgroundImage = styled.div`
  position: relative;
  height: 60vh;
  max-height: 500px;
  overflow: hidden;
`

export const Indicator = styled.div<{ selected: boolean }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 4px 12px;
  border: 1px solid ${color.white};
  border-radius: 50%;
  background-color: ${color.white};

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${color.main};
        `
      : ''}
`

export const SummaryContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 70px;
  width: 100vw;
  max-width: 500px;
  transform: translateX(-50%);
`

export const Summary = styled.div`
  position: relative;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    width: calc(100% - 32px);
    color: ${color.white};
    text-align: left;
    margin-top: 2px;

    &:last-of-type {
      margin-top: 24px;
      line-height: 32px;
    }
  }
`

export const Image = styled.div`
  position: absolute;
  right: 32px;
  bottom: 0px;
  ${whiteImgStyle};
`

export const Description = styled(Text)`
  width: 180px !important;
`
