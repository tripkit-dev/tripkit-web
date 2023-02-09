import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { color } from '@shared/constants'
import { usePopup } from '@shared/hooks'

import Text from '../Text'

interface Props {
  title: string
  message: string
  onOk?(): void
  onCancel?(): void
}

export default function Confirm({ title, message, onOk, onCancel }: Props) {
  const [, handler] = usePopup()

  return (
    <SConfirm>
      <Text fontWeight="500">{title}</Text>
      <Text
        size="xsmall"
        margin="16px 0 0 0"
        color={color.gray05}
        fontWeight="400"
      >
        {message}
      </Text>

      <ButtonGroup>
        <Button
          kind="cancel"
          onClick={() => {
            onCancel?.()
            handler.close()
          }}
        >
          취소
        </Button>
        <Button
          kind="ok"
          onClick={() => {
            onOk?.()
            handler.close()
          }}
        >
          확인
        </Button>
      </ButtonGroup>
    </SConfirm>
  )
}

const SConfirm = styled.div`
  width: 80vw;
  max-width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  padding-bottom: 70px;
  border-radius: 4px;
  background-color: ${color.white};
  box-shadow: 0px 9px 8px 2px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 9px 8px 2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 9px 8px 2px rgba(0, 0, 0, 0.25);
  z-index: 99;

  p {
    width: 100%;
    text-align: center;
  }
`

const ButtonGroup = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: 1px solid ${color.gray08};
`

const Button = styled.button<{ kind: 'cancel' | 'ok' }>`
  height: 48px;
  width: calc(50% - 0.5px);
  background-color: ${color.white};

  &:first-of-type {
    border-right: 1px solid ${color.gray08};
  }

  ${({ kind }) => {
    switch (kind) {
      case 'ok': {
        return css`
          color: ${color.main};
        `
      }
      case 'cancel':
      default: {
        return css`
          color: ${color.gray06};
        `
      }
    }
  }}
`
