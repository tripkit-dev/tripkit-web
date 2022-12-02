import styled from '@emotion/styled'

import { css } from '@emotion/react'

import type { FC, HTMLAttributes } from 'react'

const Text: FC<Props> = ({
  size = 'medium',
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
    lineClamp === 1
      ? css`
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : Number.isInteger(lineClamp)
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
  xsmall: css`
    font-size: 12px;
    font-weight: 300;
  `,
  small: css`
    font-size: 16px;
    font-weight: 400;
  `,
  medium: css`
    font-size: 18px;
    font-weight: bold;
  `,
  large: css`
    font-size: 22px;
    font-weight: bold;
  `,
  xlarge: css`
    font-size: 26px;
    font-weight: bolder;
  `,
  xxlarge: css`
    font-size: 32px;
    font-weight: bolder;
  `
}

interface STextProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  lineClamp?: number
}

interface Props extends HTMLAttributes<HTMLSpanElement>, STextProps {
  fontWeight?: string
  margin?: string
  padding?: string
}
