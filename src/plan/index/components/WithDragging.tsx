import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { ReactNode, useMemo } from 'react'

import { color } from '@shared/constants'
import { usePopup, useSwipe } from '@shared/hooks'

interface Props {
  children: ReactNode
}

export default function WithDragging({ children }: Props) {
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
    <DragContainer y={dragY}>
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

      {children}
    </DragContainer>
  )
}

const DragContainer = styled.div<{ y: number }>`
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
