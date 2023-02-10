import { css } from '@emotion/react'

import { useEffect, useState } from 'react'

import { Select as CommonSelect } from '@shared/components'

import { searchCategoryModels } from '@search/models'

interface Props {
  values?: string[]
  onChange?(value: string[]): void
}

export default function CategorySelector({ values: _values, onChange }: Props) {
  const [values, setValues] = useState<string[]>([])

  useEffect(() => {
    onChange?.(values)
  }, [onChange, values])

  return (
    <CommonSelect
      list={searchCategoryModels}
      value={_values}
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
        `
      }}
    />
  )
}
