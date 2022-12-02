import styled from '@emotion/styled'

import { css, Interpolation, Theme } from '@emotion/react'

import { forwardRef, HTMLAttributes } from 'react'

import { color } from '@shared/constants'

interface SInputProps {
  shape?: 'normal' | 'round'
  kind?: 'primary' | 'secondary' | 'tertiary'
}

interface InputProps extends SInputProps, HTMLAttributes<HTMLInputElement> {
  cssStyle?: Interpolation<Theme>
}

const Input = forwardRef<HTMLInputElement, InputProps>(function input(
  { shape = 'normal', kind = 'primary', cssStyle, ...props },
  ref
) {
  return (
    <SInput
      ref={ref}
      type="text"
      shape={shape}
      kind={kind}
      css={cssStyle}
      {...props}
    />
  )
})

export default Input

const SInput = styled.input<SInputProps>`
  display: inline-block;
  width: calc(100% - 4px);
  max-width: 356px;
  border: 1px solid;

  background-color: ${color.white};

  text-align: center;

  font-weight: 400;
  font-size: 16px;

  ${({ shape }) => styles[shape!]}
  ${({ kind }) => styles[kind!]}
`

const styles = {
  normal: css`
    height: 52px;
    border-radius: 4px;
  `,
  round: css`
    height: 42px;
    border-radius: 22px;
  `,
  primary: css`
    color: ${color.lightBlack};
    border-color: ${color.main};

    &::placeholder {
      color: ${color.mainPlaceholder};
    }
  `,
  secondary: css`
    color: ${color.lightBlack};
    border-color: ${color.gray02};

    &::placeholder {
      color: ${color.gray02};
    }
  `,
  tertiary: css`
    border: none;

    &:focus {
      outline: none;
    }
  `
}
