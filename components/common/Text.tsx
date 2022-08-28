import styled from '@emotion/styled'

import type { FC, HTMLAttributes } from 'react'

import { Size } from '@enums/Text'

import { css } from '@emotion/react'

interface STextProps {
  size?: Size
  lineClamp?: number
}

interface Props extends HTMLAttributes<HTMLSpanElement>, STextProps {
  fontWeight?: string
  margin?: string
  padding?: string
}

const Text: FC<Props> = ({
  size = Size.MEDIUM,
  lineClamp,
  color,
  fontWeight,
  margin,
  padding,
  children,
  ...props
}) => {
  return (
    <SText
      size={size}
      lineClamp={lineClamp}
      style={{ color, fontWeight, margin, padding }}
      {...props}
    >
      {children}
    </SText>
  )
}

export default Text

const SText = styled.p<STextProps>`
  display: inline-block;
  margin: 0;

  ${({ lineClamp }) =>
    lineClamp
      ? css`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: normal !important;
          -webkit-line-clamp: ${lineClamp};
        `
      : ''}
  ${({ size }) => styles[size!]}
`

const styles = {
  [Size.X_SMALL]: css`
    font-size: 12px;
    font-weight: 300;
  `,
  [Size.SMALL]: css`
    font-size: 16px;
    font-weight: 400;
  `,
  [Size.MEDIUM]: css`
    font-size: 18px;
    font-weight: bold;
  `,
  [Size.LARGE]: css`
    font-size: 22px;
    font-weight: bold;
  `,
  [Size.X_LARGE]: css`
    font-size: 26px;
    font-weight: bolder;
  `,
  [Size.XX_LARGE]: css`
    font-size: 32px;
    font-weight: bolder;
  `
}
