import { css } from '@emotion/react'

import { useEffect, useState } from 'react'

import { Select as CommonSelect } from '@shared/components'

import { searchCategoryModels } from '@search/models'

interface Props {
  value?: string
  onChange?(value: string[]): void
}

export default function SelectCategory({ value, onChange }: Props) {
  const [values, setValues] = useState<string[]>([])

  useEffect(() => {
    if (values.length <= 0) {
      return
    }

    onChange?.(values)
  }, [onChange, values])

  return (
    <CommonSelect
      list={searchCategoryModels.map((category) => ({
        ...category,
        label: category.emoji + '  ' + category.label
      }))}
      value={value}
      onChange={(newValue) => {
        setValues((prev) => {
          if (prev.includes(newValue)) {
            return prev.filter((_value) => _value !== newValue)
          }

          return [...prev, newValue]
        })
      }}
      buttonOptions={{
        cssStyle: css`
          display: inline-block;
          margin-right: 12px;
          margin-bottom: 12px;
          width: min-content;
          padding-left: 14px;
          padding-right: 14px;
        `
      }}
    />
  )
}
