import styled from '@emotion/styled'

import { Input } from '@shared/components'
import { color } from '@shared/constants'

interface Props {
  value?: string
  onChange?(value: string): void
}

export default function PlaceName({ value, onChange }: Props) {
  return (
    <SContainer>
      <SInput
        kind="secondary"
        shape="semi-round"
        placeholder="장소(가게) 이름"
        onChange={(e) => onChange?.((e.target as HTMLInputElement).value)}
        value={value}
      />
    </SContainer>
  )
}

const SContainer = styled.div`
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
  }
`

const SInput = styled(Input)`
  position: relative;
  width: calc(100% - 76px);
  padding: 0 38px;
  text-align: left;
  color: ${color.gray05};

  &::placeholder {
    color: ${color.gray07};
  }
`
