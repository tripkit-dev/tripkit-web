import styled from '@emotion/styled'

import { Button, Map } from '@shared/components'
import { useCopy2Clipboard } from '@shared/hooks'

import InfoRow from './InfoRow'

export default function Location() {
  const copy = useCopy2Clipboard()

  const marker = { lat: 37.787429826238, lng: 128.9260850932 }
  const address = '강원도 강릉시 창해로 245'
  const placeName = '엔드 투 엔드'

  return (
    <SContainer>
      <InfoRow
        iconSrc="/images/icons/bold-marker.png"
        text="강원도 강릉시 창해로 245"
        right={
          <SCopyButton
            kind="quaternary"
            size="small"
            onClick={() => copy(address)}
          >
            복사
          </SCopyButton>
        }
      />

      <SMap>
        <Map
          centerPosition={marker}
          markers={[{ name: placeName, position: marker }]}
        />

        <SWannabe kind="mustard" size="small">
          가고싶은 곳
        </SWannabe>
      </SMap>
    </SContainer>
  )
}

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const SCopyButton = styled(Button)`
  height: 32px;
  border-radius: 16px;
`

const SMap = styled.div`
  position: relative;
  height: 300px;
`

const SWannabe = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 100px;
  z-index: 9;
`
