import type { HTMLAttributes } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Kind, Shape } from '@enums/Input'

import { color } from '@constants/color'

interface SInputProps {
  shape?: Shape
  kind?: Kind
}

interface InputProps extends SInputProps, HTMLAttributes<HTMLInputElement> {}

const Input = ({
  shape = Shape.NORMAL,
  kind = Kind.PRIMARY,
  ...props
}: InputProps) => {
  return <SInput type="text" shape={shape} kind={kind} {...props} />
}

export default Input

const SInput = styled.input<SInputProps & { shape: Shape; kind: Kind }>`
  font-weight: 700;
  border: 1px solid;
  display: inline-block;
  background-color: transparent;
  text-align: center;
  font-weight: 400;
  font-size: 18px;

  width: 100%;
  max-width: 356px;

  ${({ shape }) => styles[shape]}
  ${({ kind }) => styles[kind]}
`

const styles = {
  [Shape.NORMAL]: css`
    height: 52px;
    border-radius: 4px;
  `,
  [Shape.ROUND]: css`
    height: 42px;
    border-radius: 22px;
  `,
  [Kind.PRIMARY]: css`
    color: ${color.lightBlack};
    border-color: ${color.main};

    &::placeholder {
      color: ${color.mainPlaceholder};
    }
  `,
  [Kind.SECONDARY]: css`
    color: ${color.lightBlack};
    border-color: ${color.gray};

    &::placeholder {
      color: ${color.gray};
    }
  `
}
