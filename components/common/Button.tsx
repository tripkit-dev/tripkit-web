import styled from '@emotion/styled'

import type { HTMLAttributes, MouseEventHandler } from 'react'

import { Kind } from '@enums/Button'
import { Size } from '@enums/Size'

import { color } from '@constants/color'
import { css } from '@emotion/react'

interface SButtonProps {
  kind?: Kind
  size?: Size
}

interface Props extends SButtonProps, HTMLAttributes<HTMLButtonElement> {
  label: string
  backgroundColor?: string
  borderColor?: string
  color?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  kind = Kind.PRIMARY,
  size = Size.MEDIUM,
  backgroundColor,
  borderColor,
  color,
  label,
  ...props
}: Props) => {
  return (
    <SButton
      kind={kind}
      size={size}
      style={{ backgroundColor, color, borderColor }}
      {...props}
    >
      {label}
    </SButton>
  )
}

export default Button

const SButton = styled.button<SButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 1px solid ${color.main};
  cursor: pointer;
  display: inline-block;

  ${({ kind }) => styles[kind!]}
  ${({ size }) => styles[size!]}
`

const styles = {
  [Kind.PRIMARY]: css`
    color: ${color.white};
    background-color: ${color.main};
  `,
  [Kind.SECONDARY]: css`
    color: ${color.main};
    background-color: transparent;
  `,
  [Kind.TERTIARY]: css`
    color: ${color.white};
    border-color: ${color.white};
    background-color: ${color.gray01};
  `,
  [Kind.MUSTARD]: css`
    color: ${color.white};
    border-color: ${color.mustard};
    background-color: ${color.mustard};
  `,
  [Size.X_SMALL]: css`
    width: 46px;
    height: 20px;
    font-size: 10px;
    font-weight: 400;
    border-radius: 10px;
  `,
  [Size.SMALL]: css`
    width: 76px;
    height: 26px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 13px;
  `,
  [Size.MEDIUM]: css`
    width: 68px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 18px;
  `,
  [Size.LARGE]: css`
    width: 90px;
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 24px;
  `,
  [Size.X_LARGE]: css`
    width: 174px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 24px;
  `
}
