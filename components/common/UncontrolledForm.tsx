import React, { useRef } from 'react'

import type { Interpolation, Theme } from '@emotion/react'

interface ChildrenProps {
  ref: React.RefObject<HTMLInputElement>
  handleSubmit(e: React.FormEvent | React.MouseEvent): void
}

interface Props {
  children(props: ChildrenProps): React.ReactNode
  onSubmit(value: string): void
  cssStyle?: Interpolation<Theme>
}

const UncontrolledForm = ({ children, onSubmit, cssStyle }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()
    if (!inputRef.current) return

    onSubmit(inputRef.current.value)

    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} css={cssStyle}>
      {children({ ref: inputRef, handleSubmit })}
    </form>
  )
}

export default UncontrolledForm