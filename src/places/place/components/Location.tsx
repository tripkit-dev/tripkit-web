import styled from '@emotion/styled'

import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk'

import { Button } from '@shared/components'
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
          center={marker}
          style={{ width: '100%', height: '300px' }}
          draggable={false}
        >
          <MapMarker
            position={marker}
            image={{
              src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
              size: {
                width: 64,
                height: 69
              }
            }}
          />
          <CustomOverlayMap position={marker} yAnchor={1}>
            <SMarkerDescription>
              <a
                href="https://map.kakao.com/link/map/11394059"
                target="_blank"
                rel="noreferrer"
              >
                <span className="title">{placeName}</span>
              </a>
            </SMarkerDescription>
          </CustomOverlayMap>
        </Map>

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

const SMarkerDescription = styled.div`
  width: 120px;
  transform: translate(72px, -32px);
`
