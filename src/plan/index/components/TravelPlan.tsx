import styled from '@emotion/styled'

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd'

import { Button, HeartIcon } from '@shared/components'
import { Confirm } from '@shared/components/popup'
import { box } from '@shared/constants'
import { useAlert, usePopup, useScroll } from '@shared/hooks'

import { Plan } from '../types/Plan'

interface Props {
  plans: Plan[]
  children(props: ChildProps): ReactNode
  onChange(plans: Plan[]): void
}

export default function TravelPlan({
  plans: defaultPlans,
  children,
  onChange
}: Props) {
  const [, { open }] = usePopup()
  const alert = useAlert()
  const scroll = useScroll()
  const [plans, setPlans] = useState<Plan[]>(defaultPlans)

  const nextDummyPlan: Plan = useMemo(
    () => ({
      details: []
    }),
    []
  )

  const updatePlan = useCallback((day: number, plan: Plan) => {
    const index = day - 1

    setPlans((prev) => {
      return prev.map((_plan, _index) => (_index === index ? plan : _plan))
    })
  }, [])

  const handleEndDrag: OnDragEndResponder = useCallback(
    ({ destination, source }) => {
      if (!destination || !source || source.index === destination.index) return

      open({
        content: (
          <Confirm
            title="계획일 변경"
            message={`${source.index + 1}일차를 ${
              destination.index + 1
            }일차로 변경할게요`}
            onOk={() => {
              setPlans((prev) => {
                const next = [...prev]
                const [reorderedItem] = next.splice(source.index, 1)

                next.splice(destination.index, 0, reorderedItem)

                return next
              })

              alert.success('계획이 변경되었어요')
            }}
            onCancel={() => {
              alert.warn('계획일 변경이 취소되었어요')
            }}
          />
        )
      })
    },
    [alert, open]
  )

  useEffect(() => {
    onChange(plans)
  }, [plans, onChange])

  return (
    <STravelPlan>
      <DragDropContext onDragEnd={handleEndDrag}>
        <Droppable droppableId="droppable-travel-plans">
          {({ innerRef, droppableProps, placeholder }) => (
            <Ul
              {...droppableProps}
              ref={innerRef}
              className="droppable-travel-plans"
            >
              {children({ plans, updatePlan })}
              {placeholder}
            </Ul>
          )}
        </Droppable>
      </DragDropContext>

      <AddButton
        size="xlarge"
        kind="secondary"
        shape="semi-round"
        onClick={() => {
          setPlans((prev) => [...prev, nextDummyPlan])
          scroll.toBottom()
        }}
      >
        다음 날
        <Icon>
          <HeartIcon sideLength="18px" />
        </Icon>
      </AddButton>
    </STravelPlan>
  )
}

interface ChildProps {
  plans: Plan[]
  updatePlan(day: number, plan: Plan): void
}

const STravelPlan = styled.div`
  margin: 16px auto;
  width: calc(100% - 32px);
  max-width: ${box.CONTENT_MAX_WIDTH};
`

const AddButton = styled(Button)`
  position: relative;
  width: 100%;
`

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
`

const Ul = styled.ul`
  margin-bottom: 16px;
`
