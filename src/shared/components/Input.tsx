import styled from '@emotion/styled'

import { css, Interpolation, Theme } from '@emotion/react'

import { forwardRef, HTMLAttributes, useEffect, useState } from 'react'

import { color } from '@shared/constants'

export const UncontrolledInput = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      shape = 'normal',
      kind = 'primary',
      cssStyle,
      value: initialValue,
      ...props
    },
    ref
  ) {
    const [value, setValue] = useState<string>(initialValue || '')

    return (
      <SInput
        ref={ref}
        type="text"
        shape={shape}
        kind={kind}
        css={cssStyle}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        {...props}
      />
    )
  }
)

export const ControlledInput = ({
  shape = 'normal',
  kind = 'primary',
  cssStyle,
  value: initialValue,
  onChange,
  ...props
}: ControlledInputProps) => {
  const [value, setValue] = useState<string>(initialValue || '')

  useEffect(() => {
    onChange?.(value)
  }, [value, onChange])

  return (
    <SInput
      type="text"
      shape={shape}
      kind={kind}
      css={cssStyle}
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      {...props}
    />
  )
}

const SInput = styled.input<SInputProps>`
  display: inline-block;
  width: calc(100% - 4px);
  max-width: 356px;
  border: 1px solid;

  background-color: ${color.white};

  text-align: center;

  font-weight: 400;
  font-size: 16px;

  &:focus {
    outline: none;
  }

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
  'semi-round': css`
    height: 42px;
    border-radius: 10px;
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
    border-color: ${color.gray06};

    &::placeholder {
      color: ${color.gray06};
    }
  `,
  tertiary: css`
    border: none;

    &:focus {
      outline: none;
    }
  `
}

interface SInputProps {
  shape?: 'normal' | 'round' | 'semi-round'
  kind?: 'primary' | 'secondary' | 'tertiary'
}

interface InputProps extends SInputProps, HTMLAttributes<HTMLInputElement> {
  cssStyle?: Interpolation<Theme>
  value?: string
}

interface ControlledInputProps
  extends SInputProps,
    Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  cssStyle?: Interpolation<Theme>
  value?: string
  onChange(value: string): void
}
