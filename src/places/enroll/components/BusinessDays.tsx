import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { useEffect, useState } from 'react'

import { Select } from '@shared/components'
import { dateModels } from '@shared/models'

interface Props {
  onChange?(values: string[]): void
}

export default function BusinessDays({ onChange }: Props) {
  const [values, setValues] = useState<string[]>([])

  useEffect(() => {
    if (values.length <= 0) {
      return
    }

    onChange?.(values)
  }, [onChange, values])

  return (
    <SContainer>
      <Select
        list={dateModels}
        value={values}
        onChange={(newValue) => {
          setValues((prev) => {
            if (prev.includes(newValue)) {
              return prev.filter((_value) => _value !== newValue)
            }

            return [...prev, newValue]
          })
        }}
        buttonOptions={{
          size: 'xsmall',
          shape: 'semi-round',
          cssStyle: css`
            width: 32px;
            height: 32px;
            margin: 0 8px !important;
            padding-left: 10px;
          `
        }}
      />
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
