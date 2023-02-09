import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { Draggable } from 'react-beautiful-dnd'

import { HeartIcon, Text } from '@shared/components'
import { color } from '@shared/constants'

import { Plan } from '../types/Plan'

interface Props {
  plan: Plan
  day: number
}

export default function DailyPlan({ plan, day }: Props) {
  console.log(plan)

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
              <Text margin="0 8px" fontWeight="500">
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
              <HeartIcon sideLength="18px" />
            </TopRight>
          </Top>
        </SPlan>
      )}
    </Draggable>
  )
}

const SPlan = styled.li<{ isDragging: boolean }>`
  border: 1px solid ${color.gray07};
  border-radius: 9px;
  padding: 28px 16px;
  margin-bottom: 16px;

  ${({ isDragging }) =>
    isDragging
      ? css`
          background-color: green;
        `
      : ''}
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
