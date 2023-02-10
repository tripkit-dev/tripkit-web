import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { HeartIcon, Text } from '@shared/components'
import { color } from '@shared/constants'
import { usePopup, useQueryParams } from '@shared/hooks'

import { Plan, PlanDetail } from '../types/Plan'
import DailyPlanDetailRow from './DailyPlanDetailRow'
import PlaceSelectorPopup from './PlaceSelectorPopup'

interface Props {
  plan: Plan
  day: number
  onChangePlan(day: number, plan: Plan): void
}

const DailyPlan = memo(function DailyPlan({
  plan: defaultPlan,
  day,
  onChangePlan
}: Props) {
  const initRef = useRef<boolean>(true)
  const { region } = useQueryParams<QueryParams>({ region: '' })
  const [, handler] = usePopup()

  const [plan, setPlan] = useState<Plan>(defaultPlan)

  const isFirstDay = day === 1

  const updatePlanDetail = useCallback((details: PlanDetail[]) => {
    setPlan({ details })
  }, [])

  const removePlanDetailById = useCallback((id: number) => {
    setPlan((prev) => ({
      details: prev.details.filter((detail) => detail.id !== id)
    }))
  }, [])

  useEffect(() => {
    if (initRef.current) {
      initRef.current = false
    }

    setPlan(defaultPlan)
  }, [defaultPlan])

  useEffect(() => {
    onChangePlan(day, plan)
  }, [day, plan, onChangePlan])

  return (
    <Draggable draggableId={'daily-' + String(day)} index={day - 1}>
      {(provided, snapshot) => (
        <SPlan
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          className={'daily-' + String(day)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Top>
            <TopLeft>
              <Text size="2xlarge">✏️</Text>
              <Text margin="0 0 0 8px" fontWeight="500">
                {day}일차
              </Text>
            </TopLeft>
            <TopRight>
              <Text
                size="xsmall"
                color={color.mainPlaceholder}
                margin="0 8px 0 8px"
              >
                장소를 넣어봐요 &gt;&gt;
              </Text>
              <AddButton
                onClick={() => {
                  handler.open({
                    content: (
                      <PlaceSelectorPopup
                        details={plan.details}
                        onChangePlanDetail={updatePlanDetail}
                      />
                    )
                  })
                }}
              >
                <HeartIcon sideLength="18px" />
              </AddButton>
            </TopRight>
          </Top>

          {isFirstDay && (
            <ArriveAt size="small">&apos;{region}&apos; 도착 시간은?</ArriveAt>
          )}

          {plan.details.map((detail, index) => (
            <DailyPlanDetailRow
              key={detail.id}
              detail={detail}
              total={plan.details.length}
              index={index}
              remove={() => {
                removePlanDetailById(detail.id)
              }}
            />
          ))}
        </SPlan>
      )}
    </Draggable>
  )
})

export default DailyPlan

const SPlan = styled.li<{ isDragging: boolean }>`
  border: 1px solid ${color.gray07};
  border-radius: 9px;
  padding: 28px 16px;
  margin-bottom: 16px;
  background-color: ${color.white};

  transition: border-color 0.15s, background-color 0.15s, box-shadow 0.15s;

  ${({ isDragging }) =>
    isDragging
      ? css`
          border-color: ${color.main};
          background-color: ${color.gray08};
          box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.42);
          -webkit-box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.42);
          -moz-box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.42);
        `
      : ''}
`

type QueryParams = {
  region: string
}

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const AddButton = styled.span`
  height: 18px;
  width: 18px;
  overflow: hidden;
`

const ArriveAt = styled(Text)`
  position: relative;
  display: block;
  width: calc(100% - 24px);
  margin-bottom: 22px;
  padding: 12px;
  border-radius: 16px;
  background-color: ${color.mainPlaceholder10};
  text-align: center;
  font-weight: 400;

  &::before {
    content: ' ';
    background-image: url('/images/icons/arrow_right.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 24px;
    bottom: -22px;
    width: 24px;
    height: 24px;
    transform: rotate(90deg);
  }
`
