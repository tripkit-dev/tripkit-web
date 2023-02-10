import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Fragment, memo, useEffect, useState } from 'react'

import { Button, Img, Text } from '@shared/components'
import { color } from '@shared/constants'
import { hotPlaceModels } from '@shared/models'

import { PlanDetail } from '../types/Plan'
import WithDragging from './WithDragging'

interface Props {
  details: PlanDetail[]
  onChangePlanDetail(details: PlanDetail[]): void
}

export default function PlaceSelectorPopup({
  details: defaultDetails,
  onChangePlanDetail
}: Props) {
  const [details, setDetails] = useState<PlanDetail[]>(defaultDetails)

  const handleDetails = (_detail: PlanDetail) => {
    setDetails((prev) => {
      if (prev.find((detail) => detail.id === _detail.id)) {
        return prev.filter((detail) => detail.id !== _detail.id)
      }

      return [...prev, _detail]
    })
  }

  useEffect(() => {
    onChangePlanDetail(details)
  }, [details, onChangePlanDetail])

  return (
    <WithDragging>
      <Text margin="0 0 12px 16px">1일차에 갈 장소는?</Text>
      <YScroll>
        {['식당'].map((category) => (
          <Row
            key={category}
            category={category}
            details={details}
            onClick={handleDetails}
          />
        ))}

        <SButton size="xlarge" kind="quaternary">
          <span>🏠</span>
          숙소 등록하기
        </SButton>
        <SButton size="xlarge" kind="quaternary">
          다른 장소 찾기
        </SButton>
      </YScroll>
    </WithDragging>
  )
}

const Row = memo(function Row({
  category,
  details,
  onClick
}: {
  category: string
  details: PlanDetail[]
  onClick(_detail: PlanDetail): void
}) {
  const ids = details.map((detail) => detail.id)

  return (
    <Fragment key={category}>
      <Category>
        <Name size="small" fontWeight="400">
          {category}
        </Name>
        <Line />
      </Category>
      {hotPlaceModels.map((place) => (
        <Place key={place.id} isActive={ids.includes(place.id)}>
          <Img
            src={place.img}
            sideLength="48px"
            onClick={() => {
              onClick({
                id: place.id,
                name: place.name,
                category: place.category.join(','),
                img: place.img
              })
            }}
          />
        </Place>
      ))}
    </Fragment>
  )
})

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  border-color: ${color.gray08};
  color: ${color.black};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 16px auto;

  span {
    font-size: 28px;
    margin-right: 12px;
  }
`
