import styled from '@emotion/styled'

import { Fragment } from 'react'
import {
  CustomOverlayMap,
  Map as KakaoMap,
  MapMarker as KakaoMapMarker
} from 'react-kakao-maps-sdk'

interface Props {
  centerPosition: Position
  markers: Marker[]
}

export default function Map({ centerPosition, markers }: Props) {
  return (
    <KakaoMap
      center={centerPosition}
      style={{ width: '100%', height: '300px' }}
      draggable={false}
    >
      {markers.map(({ name, position = centerPosition }) => (
        <Fragment key={JSON.stringify(position)}>
          <KakaoMapMarker
            position={position}
            image={{
              src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
              size: {
                width: 64,
                height: 69
              }
            }}
          />
          <CustomOverlayMap position={position} yAnchor={1}>
            <Description>
              <a
                href="https://map.kakao.com/link/map/11394059"
                target="_blank"
                rel="noreferrer"
              >
                <span className="title">{name}</span>
              </a>
            </Description>
          </CustomOverlayMap>
        </Fragment>
      ))}
    </KakaoMap>
  )
}

const Description = styled.div`
  width: 120px;
  transform: translate(72px, -32px);
`

type Position = {
  lat: number
  lng: number
}

type Marker = {
  position: Position
  name: string
}
