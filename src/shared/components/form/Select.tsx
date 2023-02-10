import { css } from '@emotion/react'

import React, { memo } from 'react'

import Button, { ButtonProps } from '../Button'

interface Props {
  list: Item[]
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
            onClick={() => onChange?.(item.key)}
            {...buttonOptions}
            cssStyle={css`
              position: relative;
              width: min-content;
              padding: 2px 10px;
              padding-left: 28px;

              ${buttonOptions?.cssStyle ? (buttonOptions.cssStyle as any) : ''}

              &::before {
                content: ' ';
                position: absolute;
                top: 3px;
                left: 8px;
                width: 16px;
                height: 16px;
                background-image: url(/images/official/${item.emoji});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
              }
            `}
          >
            {item.label}
          </Button>
        )
      })}
    </>
  )
})

interface Item {
  key: string
  label: string
  emoji?: string
}
