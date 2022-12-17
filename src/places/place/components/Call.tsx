import styled from '@emotion/styled'

import { Button } from '@shared/components'
import { color } from '@shared/constants'

import InfoRow from './InfoRow'

export default function Call() {
  return (
    <InfoRow
      iconSrc="/images/icons/phone.png"
      text="02-0000-2123"
      right={
        <SCopyButton kind="quaternary" size="small">
          전화하기
        </SCopyButton>
      }
    />
  )
}

const SCopyButton = styled(Button)`
  height: 32px;
  border-radius: 16px;
  width: 140px;
`
