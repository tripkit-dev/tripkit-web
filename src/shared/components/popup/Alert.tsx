import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { useCallback, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'

import { Alert, alertState, AlertType } from '@shared/atoms'
import { color, 초 } from '@shared/constants'

import Img from '../Img'
import Text from '../Text'

export default function AlertPopup() {
  const timerRef = useRef<NodeJS.Timeout>()
  const prevAlertRef = useRef<Alert>()
  const [{ current, queue }, setAlert] = useRecoilState(alertState)

  const isActive = !!current

  const close = () => {
    clearTimeout(timerRef.current)
    setAlert((prev) => ({ ...prev, current: undefined }))

    setTimeout(() => {
      openNext()
    }, WAITING_OUT_TIME)
  }

  const openNext = useCallback(() => {
    if (!queue.length) return

    setAlert((prev) => {
      if (prev.current) {
        return prev
      }

      const [next, ...nextQueue] = prev.queue

      prevAlertRef.current = next
      return {
        current: next,
        queue: nextQueue
      }
    })
  }, [queue, setAlert])

  useEffect(() => {
    openNext()
  }, [openNext])

  useEffect(() => {
    if (current) {
      timerRef.current = setTimeout(() => {
        setAlert((prev) => ({
          ...prev,
          current: undefined
        }))
      }, DISPLAYING_TIME)
    }
  }, [current, setAlert])

  return (
    <Container isActive={isActive}>
      <Img
        src={getIconUrlByType(current?.type || prevAlertRef.current?.type)}
        sideLength="18px"
      />
      <Message
        size="small"
        color={color.gray05}
        fontWeight="400"
        margin="0 0 0 10px"
      >
        {current?.message || prevAlertRef.current?.message}
      </Message>
      <Close onClick={close}>
        <Img src="/images/icons/plus.svg" sideLength="18px" />
      </Close>
    </Container>
  )
}

const getIconUrlByType = (type?: AlertType) => {
  switch (type) {
    case 'success': {
      return '/images/icons/check.svg'
    }
    case 'error': {
      return '/images/icons/cancel.svg'
    }
    case 'warn': {
      return '/images/icons/warn.png'
    }
    case 'normal':
    default: {
      return '/images/icons/info_blue.svg'
    }
  }
}

const WAITING_OUT_TIME = 0.3 * 초
const DISPLAYING_TIME = 1.8 * 초

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;

  position: fixed;
  width: calc(90vw - 12px);
  max-width: 420px;
  min-height: 32px;
  left: 50%;
  top: 24px;
  padding: 8px 12px;
  transform: translate(-50%, -200%);
  border: 1px solid ${color.gray08};
  border-radius: 4px;
  background-color: ${color.white};
  box-shadow: 0px 5px 8px 0px rgba(100, 100, 100, 0.48);
  -webkit-box-shadow: 0px 5px 8px 0px rgba(100, 100, 100, 0.48);
  -moz-box-shadow: 0px 5px 8px 0px rgba(100, 100, 100, 0.48);
  z-index: 9;

  transition: transform 0.25s;

  ${({ isActive }) =>
    isActive
      ? css`
          transform: translate(-50%, 0);
        `
      : ''}
`

const Message = styled(Text)`
  max-width: calc(100% - 40px - 50px);
`

const Close = styled.div`
  top: 14px;
  right: 12px;
  position: absolute;
  transform: rotate(45deg);
`
