import * as s from './BusnissHours.styled'

import { css } from '@emotion/react'

import { Fragment, useEffect, useState } from 'react'

import { TimePicker, useModal } from '@shared/components'
import { TimePickerType } from '@shared/components/form/TimePicker'

interface Props {
  open?: TimePickerType
  close?: TimePickerType
  onChange(time: BusinessTimeType): void
}

export default function BusinessHours({ open, close, onChange }: Props) {
  const [time, setTime] = useState<BusinessTimeType>({
    open,
    close
  })

  useEffect(() => {
    onChange(time)
  }, [onChange, time])

  return (
    <s.Container>
      {[
        { type: 'open' as FormType, label: '오픈 시간' },
        { type: 'close' as FormType, label: '마감 시간' }
      ].map((form) => (
        <Fragment key={form.type}>
          <ButtonWithPicker
            {...form}
            onChange={(newState) =>
              setTime((prev) => ({ ...prev, ...newState }))
            }
            value={time[form.type]}
          />
          {form.type === 'open' && <s.Line />}
        </Fragment>
      ))}
    </s.Container>
  )
}

interface ButtonWithPickerProps {
  type: FormType
  label: string
  onChange(date: { [key: string]: TimePickerType }): void
  value?: TimePickerType
}

function ButtonWithPicker({
  type,
  label,
  onChange,
  value
}: ButtonWithPickerProps) {
  const { open, close } = useModal()

  return (
    <s.Button
      kind="quaternary"
      size="xsmall"
      shape="semi-round"
      onClick={() =>
        open?.(
          <s.TimePicker>
            <s.Text size="small">{label}</s.Text>
            <TimePicker
              onChange={(date) =>
                onChange({
                  [type]: date
                })
              }
              value={value}
            />
            <s.Button
              kind="quaternary"
              shape="semi-round"
              size="small"
              onClick={close}
              cssStyle={css`
                margin-top: 24px;
              `}
            >
              완료
            </s.Button>
          </s.TimePicker>
        )
      }
    >
      {value ? JSON.stringify(value) : label}
    </s.Button>
  )
}

type FormType = 'open' | 'close'

export interface BusinessTimeType {
  open?: TimePickerType
  close?: TimePickerType
}
