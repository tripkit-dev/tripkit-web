import styled from '@emotion/styled'

import Link from 'next/link'
import React, { useMemo } from 'react'

import { HeartIcon, Img, Text } from '@shared/components'
import { color } from '@shared/constants'
import { routes } from '@shared/libraries'
import { TravelDestination } from '@shared/types'

interface Props {
  place: TravelDestination
}

const Place = ({ place }: Props) => {
  const rd = useMemo(() => Math.random(), [])
  const isLiked = rd < 0.2

  return (
    <SPlace key={place.id}>
      <Link
        href={routes.places.place.path}
        as={`${routes.places.path}/${place.id}`}
      >
        <SLink>
          <SImg>
            <Img src={place.src} shape="normal" sideLength="110px" />
          </SImg>
          <SContent>
            <STitle>
              <Text>곳</Text>
              <Text size="xsmall" lineClamp={1} margin="0 0 0 14px">
                베이커리
              </Text>
            </STitle>
            <Text size="xsmall" lineClamp={1}>
              사천해변 걷다가 하늘계단 오르는 강릉카페
            </Text>
            <SHeart>
              <HeartIcon isBlue isFill={isLiked} />
            </SHeart>
          </SContent>
        </SLink>
      </Link>
    </SPlace>
  )
}

export default React.memo(Place)

const SPlace = styled.li`
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100% - 20px);
    border-bottom: 1px solid ${color.gray07};
  }
`

const SLink = styled.a`
  display: flex;
  height: 110px;
  padding: 10px 38px;
  overflow: hidden;
`

const SImg = styled.div`
  width: 94px;
  height: 110px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000014;
`

const SContent = styled.div`
  position: relative;
  width: calc(100% - 106px);
  padding-left: 12px;
`

const STitle = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 58px;
  margin-bottom: 14px;
`

const SHeart = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  overflow: hidden;
  top: 2px;
  right: 2px;
`
