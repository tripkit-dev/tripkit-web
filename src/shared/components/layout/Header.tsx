import styled from '@emotion/styled'

import { css } from '@emotion/react'

import { useRouter } from 'next/router'
import { memo } from 'react'

import { color } from '@shared/constants'
import { whiteImgStyle } from '@shared/styles'

interface Props {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
  backgroundColor?: string
  float?: boolean
  whiteBack?: boolean
}

export default memo(function Header({
  left,
  center,
  right,
  backgroundColor,
  float,
  whiteBack
}: Props) {
  return (
    <Container style={{ backgroundColor }} float={float}>
      <Left>{left ?? <Back white={whiteBack} />}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Container>
  )
})

const Back = ({ white }: { white?: boolean }) => {
  const { back } = useRouter()

  return <SBack onClick={back} title="뒤로가기" white={white}></SBack>
}

const Container = styled.header<{ float?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 6px);
  height: 44px;
  padding: 3px;

  ${({ float }) =>
    float
      ? css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9;
        `
      : ''}
`

const Left = styled.div`
  position: relative;
  height: 100%;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 80px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  position: relative;
  height: 100%;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SBack = styled.button<{ white?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0800ff14 url(/images/sample/ico_back.svg) no-repeat;
  background-size: 27px;
  background-position: 7px center;
  cursor: pointer;

  ${({ white }) =>
    white
      ? css`
          ${whiteImgStyle};
          background-color: ${color.transparentWhite30};
        `
      : ''}
`
