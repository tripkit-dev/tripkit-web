import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Fragment, useMemo } from 'react'

import { Button, Img, Text } from '@shared/components'
import { color } from '@shared/constants'
import { usePopup, useSwipe } from '@shared/hooks'
import { hotPlaceModels } from '@shared/models'

export default function PlaceSelector() {
  const [, { close }] = usePopup()
  const { position, handler } = useSwipe({
    direction: 'bottom',
    callback: close
  })

  const dragY = useMemo(
    () => Math.min(0, position.startY - position.endY),
    [position]
  )

  return (
    <SPlaceSelector y={dragY}>
      <Drag>
        <DragBar
          onMouseDown={handler.touchStart}
          onTouchStart={handler.touchStart}
          onMouseMove={handler.touchMove}
          onTouchMove={handler.touchMove}
          onMouseUp={handler.touchEnd}
          onTouchEnd={handler.touchEnd}
        />
      </Drag>
      <Text margin="0 0 12px 16px">1일차에 갈 장소는?</Text>
      <YScroll>
        {['식당', '카페', '산책'].map((category) => (
          <Fragment key={category}>
            <Category>
              <Name size="small" fontWeight="400">
                {category}
              </Name>
              <Line />
            </Category>
            {hotPlaceModels.map((place) => (
              <Place key={place.id} isActive={Math.random() < 0.3}>
                <Img src={place.img} sideLength="48px" />
              </Place>
            ))}
          </Fragment>
        ))}

        <SButton size="xlarge" kind="quaternary">
          <span>🏠</span>
          숙소 등록하기
        </SButton>
        <SButton size="xlarge" kind="quaternary">
          다른 장소 찾기
        </SButton>
      </YScroll>
    </SPlaceSelector>
  )
}

const SPlaceSelector = styled.div<{ y: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 2px - 48px);
  height: 432px;
  padding: 24px;
  padding-top: 40px;
  padding-bottom: 0;
  border: 1px solid ${color.mainPlaceholder};
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  background-color: ${color.white};

  p {
    display: block;
  }

  ${({ y }) => css`
    transform: translateY(${-y}px);
  `}
`

const Drag = styled.div`
  position: absolute;
  left: 50%;
  top: 16px;
  transform: translateX(-50%);
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

const DragBar = styled.button`
  width: 40px;
  background-color: ${color.mainPlaceholder};
`

const YScroll = styled.div`
  height: 371px;
  overflow-y: auto;
  padding-bottom: 24px;
`

const Category = styled.div`
  position: relative;
  height: 20px;
  margin-top: 12px;
  margin-left: 16px;
  margin-bottom: 12px;
`

const Name = styled(Text)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  padding-right: 8px;
  z-index: 1;
  background-color: ${color.white};
`

const Line = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border: 1.5px solid ${color.gray08};
  width: calc(100% - 12px);
`

const Place = styled.span<{ isActive: boolean }>`
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${color.white};
  border-radius: 50%;
  padding: 1px;
  margin: 4px;

  ${({ isActive }) =>
    isActive
      ? css`
          border-color: ${color.main};
        `
      : ''}
`

const SButton = styled(Button)`
  display: block;
  width: 70%;
  border-color: ${color.gray08};
  color: ${color.black};
  box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 2px 4px -3px rgba(0, 0, 0, 0.42);
  margin: 16px auto;
`
