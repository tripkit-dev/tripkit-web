import { Content, Logo, Rotate, Submit, WhiteText, XControlDiv } from './styled'

import React from 'react'

import { GradationFilm, Img } from '@shared/components'

interface Props {
  next(): void
}

const First = ({ next }: Props) => {
  return (
    <XControlDiv x={0} z={3}>
      <Img
        src="/images/sample/room_01.png"
        shape="normal"
        sideLength="100%"
        layout="fill"
        objectFit="cover"
      />
      <GradationFilm />
      <Content>
        <Logo>TRIP KIT</Logo>
        <WhiteText size="2xlarge" fontWeight="500">
          여행은
        </WhiteText>
        <WhiteText size="2xlarge" fontWeight="500" margin="0 0 12px 0">
          역시 계획부터죠! <Rotate>👍🏻</Rotate>
        </WhiteText>
        <WhiteText size="small" fontWeight="300">
          빠르고 손쉽게 여행 계획을 짜볼까요?
        </WhiteText>
      </Content>
      <Submit onClick={next}>시작하기</Submit>
    </XControlDiv>
  )
}

export default First
