import styled from '@emotion/styled'

import type { Interpolation, Theme } from '@emotion/react'

import React, { useCallback, useState } from 'react'

interface Props {
  children(props: ChildrenProps): React.ReactNode
  onSubmit(value: string): void
  cssStyle?: Interpolation<Theme>
}

const ControlledForm = ({ children, onSubmit, cssStyle }: Props) => {
  const [value, setValue] = useState<string>('')

  const onChange = useCallback((_value: string) => {
    setValue(_value)
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent | React.MouseEvent) => {
      e.preventDefault()
      if (!value) return

      onSubmit(value)
      setValue('')
    },
    [onSubmit, value]
  )

  return (
    <SForm onSubmit={handleSubmit} css={cssStyle}>
      {children({ value, onChange, onSubmit: handleSubmit })}
    </SForm>
  )
}

export default ControlledForm

const SForm = styled.form`
  position: relative;
  text-align: center;
`

interface ChildrenProps {
  value: string
  onChange(value: string): void
  onSubmit(e: React.FormEvent | React.MouseEvent): void
}
