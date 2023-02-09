import React, { MouseEvent, TouchEvent, useCallback } from 'react'

interface Props {
  threshold?: {
    x?: number
    y?: number
  }
  direction?: 'left' | 'right' | 'top' | 'bottom'
  callback?(): void
}

export default function useSwipeElement({
  threshold = { x: 80, y: 80 },
  direction,
  callback
}: Props) {
  const [isMoving, setMoving] = React.useState(false)
  const [position, setPosition] = React.useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  })

  const resetPosition = useCallback(() => {
    setPosition({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    })
  }, [])

  const touchStart = useCallback((e: Event) => {
    const isMouse = isMouseEvent(e)
    setMoving(true)
    setPosition({
      startX: isMouse ? e.clientX : e.targetTouches[0].clientX,
      startY: isMouse ? e.clientY : e.targetTouches[0].clientY,
      endX: isMouse ? e.clientX : e.targetTouches[0].clientX,
      endY: isMouse ? e.clientY : e.targetTouches[0].clientY
    })
  }, [])

  const touchMove = React.useCallback(
    (e: Event) => {
      if (!isMoving) return
      const isMouse = isMouseEvent(e)

      setPosition({
        ...position,
        endX: isMouse ? e.clientX : e.targetTouches[0].clientX,
        endY: isMouse ? e.clientY : e.targetTouches[0].clientY
      })
    },
    [isMoving, position]
  )

  const touchEnd = useCallback(() => {
    const gapX = position.startX - position.endX
    const gapY = position.startY - position.endY
    const absX = Math.abs(gapX)
    const absY = Math.abs(gapY)
    setMoving(false)

    if (gapX >= threshold.x! && absY <= threshold.y!) {
      direction === 'left' ? callback?.() : resetPosition()
    } else if (gapX <= -threshold.x! && absY <= threshold.y!) {
      direction === 'right' ? callback?.() : resetPosition()
    } else if (absX <= threshold.x! && gapY >= threshold.y!) {
      direction === 'top' ? callback?.() : resetPosition()
    } else if (absX <= threshold.x! && gapY <= threshold.y!) {
      direction === 'bottom' ? callback?.() : resetPosition()
    } else {
      resetPosition()
    }

    resetPosition()
  }, [direction, position, resetPosition, threshold, callback])

  return {
    position,
    isMoving,
    handler: {
      touchStart,
      touchMove,
      touchEnd
    }
  }
}

const isMouseEvent = (e: Event) => {
  return e.type.includes('mouse')
}

type Event = MouseEvent<HTMLButtonElement> & TouchEvent<HTMLButtonElement>
