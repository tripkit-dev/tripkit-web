import styled from '@emotion/styled'

import { useEffect, useMemo, useState } from 'react'

import { color } from '@shared/constants'
import { hourModels, minuteModels } from '@shared/models'

interface Props {
  onChange(date: TimePickerType): void
  value?: TimePickerType
}

export default function TimePicker({ onChange, value }: Props) {
  console.log(value)

  const [time, setTime] = useState<TimePickerType>(value || initialTime)

  const handleChange = (key: string, value: string) => {
    setTime((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const formModels = useMemo(
    () => [
      { id: 'meridiem' as FormType, list: ['AM', 'PM'] },
      { id: 'hour' as FormType, list: hourModels },
      { id: 'minute' as FormType, list: minuteModels }
    ],
    []
  )

  useEffect(() => {
    onChange(time)
  }, [onChange, time])

  return (
    <div>
      {formModels.map((form) => (
        <Select
          key={form.id}
          list={form.list}
          value={time[form.id]}
          onChange={(value) => handleChange(form.id, value)}
        />
      ))}
    </div>
  )
}

interface SelectProps {
  list: string[]
  onChange(value: string): void
  value: string
}

function Select({ list, onChange, value }: SelectProps) {
  return (
    <SSelect
      onChange={({ target: { value } }) => onChange(value)}
      value={value}
    >
      {list.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SSelect>
  )
}

const SSelect = styled.select`
  padding: 7px;
  margin: 6px;

  border-left: none;
  border-right: none;
  border-color: ${color.mainPlaceholder};
  color: ${color.mainPlaceholder};

  &:focus {
    outline: ${color.mainPlaceholder};
  }
`

type FormType = 'meridiem' | 'hour' | 'minute'

const initialTime: TimePickerType = {
  meridiem: 'AM',
  hour: '09',
  minute: '00'
}

export interface TimePickerType {
  meridiem: 'AM' | 'PM'
  hour: string
  minute: string
}
