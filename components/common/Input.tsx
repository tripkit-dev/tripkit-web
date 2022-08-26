import styled from '@emotion/styled'

import { forwardRef, HTMLAttributes } from 'react'

import { Kind } from '@enums/Input'
import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css } from '@emotion/react'

interface SInputProps {
  shape?: Shape
  kind?: Kind
}

interface InputProps extends SInputProps, HTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function input(
  { shape = Shape.NORMAL, kind = Kind.PRIMARY, ...props },
  ref
) {
  return <SInput ref={ref} type="text" shape={shape} kind={kind} {...props} />
})

export default Input

const SInput = styled.input<SInputProps & { shape: Shape; kind: Kind }>`
  display: inline-block;
  width: calc(100% - 4px);
  max-width: 356px;
  border: 1px solid;

  background-color: ${color.white};

  text-align: center;

  font-weight: 400;
  font-size: 18px;

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
    border-color: ${color.gray02};

    &::placeholder {
      color: ${color.gray02};
    }
  `,
  [Kind.TERTIARY]: css`
    border: none;

    &:focus {
      outline: none;
    }
  `
}
