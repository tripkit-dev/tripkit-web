import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { FormEvent, useCallback } from 'react'

import { ControlledInput } from '@shared/components'
import { color } from '@shared/constants'

interface Props {
  value?: string
  onChange?(value: string): void
}

export default function PlaceName({ value, onChange }: Props) {
  const handleChange = useCallback(
    (value: string | FormEvent<HTMLInputElement>) =>
      onChange?.(value as string),
    [onChange]
  )

  return (
    <SContainer hasValue={!!value}>
      <SInput
        kind="secondary"
        shape="semi-round"
        placeholder="장소(가게) 이름"
        onChange={handleChange}
        value={value}
        css={
          value
            ? css`
                background-color: ${color.main};
                text-align: center;
                color: ${color.white};
              `
            : ''
        }
      />
    </SContainer>
  )
}

const SContainer = styled.div<{ hasValue: boolean }>`
  position: relative;

  &::before {
    content: ' ';
    width: 1px;
    height: 18px;
    border-left: 1px solid ${color.gray07};
    position: absolute;
    top: 50%;
    left: 26px;
    transform: translateY(-50%);
    z-index: 1;

    ${({ hasValue }) =>
      hasValue
        ? css`
            display: none;
          `
        : ''};
  }
`

const SInput = styled(ControlledInput)`
  position: relative;
  width: calc(100% - 76px);
  padding: 0 38px;
  text-align: left;
  color: ${color.gray05};

  &::placeholder {
    color: ${color.gray07};
  }
`
