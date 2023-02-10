import styled from '@emotion/styled'

import React from 'react'

import { Button, HeartIcon, Img, Text } from '@shared/components'
import { Confirm } from '@shared/components/popup'
import { color } from '@shared/constants'
import { useAlert, usePopup } from '@shared/hooks'

import { PlanDetail } from '../types/Plan'

interface Props {
  detail: PlanDetail
  total: number
  index: number
  remove(): void
}

export default function DailyPlanDetailRow({
  detail,
  total,
  index,
  remove
}: Props) {
  const alert = useAlert()
  const [, handler] = usePopup()

  const handleRemove = () => {
    handler.open({
      content: (
        <Confirm
          title="일정 삭제"
          message={`${detail.name} 방문 일정을 삭제할게요`}
          onOk={() => {
            remove()
            alert.success('일정이 삭제되었어요')
          }}
        />
      )
    })
  }
  return (
    <>
      <Destination>
        <Img src={detail.img} sideLength="54px" />
        <NameWrapper>
          <Text fontWeight="500">{detail.name}</Text>
          <Text size="xsmall">{detail.category}</Text>
        </NameWrapper>
        <ButtonWrapper>
          <TimeButton size="xsmall" kind="secondary" shape="semi-round">
            시간 추가하기
          </TimeButton>
        </ButtonWrapper>
      </Destination>

      {index + 1 < total && (
        <Transportations>
          <Arrow src="/images/icons/arrow_right.png" sideLength="16px" />
          {detail.transportation || '🚌'}
          <HeartIcon sideLength="16px" onClick={handleRemove} />
        </Transportations>
      )}
    </>
  )
}

const Destination = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: calc(100% - 12px - 2px);
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid ${color.gray07};
  border-radius: 10px;
`

const NameWrapper = styled.div`
  flex: 1;
  height: calc(54px - 12px);
  padding: 6px 0;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    display: block;
  }
`

const ButtonWrapper = styled.div`
  width: 80px;
  height: 100%;
`

const TimeButton = styled(Button)`
  width: 100%;
  border-color: ${color.mainPlaceholder10};
  color: ${color.mainPlaceholder};
`

const Transportations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px - 2px);
  height: 24px;
  padding-left: 14px;
  padding-right: 6px;
  margin-bottom: 8px;
  border: 1px solid ${color.main};
  border-radius: 10px;
`

const Arrow = styled(Img)`
  transform: rotate(90deg);
`
