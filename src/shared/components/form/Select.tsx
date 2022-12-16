import { css } from '@emotion/react'

import React, { memo } from 'react'

import Button, { ButtonProps } from '../Button'

interface Props {
  list: List[]
  value?: string | string[]
  onChange?(value: string): void
  buttonOptions?: ButtonProps
}

export default memo(function Select({
  list,
  value,
  onChange,
  buttonOptions
}: Props) {
  return (
    <>
      {list.map((item) => {
        const isActive =
          value &&
          (typeof value === 'string'
            ? value === item.key
            : value.length >= 0
            ? value.includes(item.key)
            : false)

        return (
          <Button
            id={item.key}
            key={item.key}
            kind={isActive ? 'primary' : 'quaternary'}
            size="small"
            cssStyle={css`
              width: min-content;
              padding: 2px 10px;
            `}
            onClick={() => onChange?.(item.key)}
            {...buttonOptions}
          >
            {item.label}
          </Button>
        )
      })}
    </>
  )
})

interface List {
  key: string
  label: string
}
