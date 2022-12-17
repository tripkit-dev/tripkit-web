import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Button, Img } from '@shared/components'

import InfoRow from './InfoRow'

export default function BusinessTime() {
  return (
    <InfoRow
      iconSrc="/images/icons/clock.svg"
      text="22:00 영업 종료"
      right={
        <SMoreButton kind="secondary">
          <Img
            src="/images/sample/ico_back.svg"
            sideLength="24px"
            containerCss={css`
              transform: rotate(-90deg);
            `}
          />
        </SMoreButton>
      }
    />
  )
}

const SMoreButton = styled(Button)`
  border: none;
`
