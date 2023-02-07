import { Content, Logo, Submit, WhiteText, XControlDiv } from './styled'

import React from 'react'

import { GradationFilm, Img } from '@shared/components'
import { useWindowSize } from '@shared/hooks'

interface Props {
  next(): void
}

const Second = ({ next }: Props) => {
  const { width } = useWindowSize()

  return (
    <XControlDiv x={width || 0}>
      <Img
        src="/images/sample/kangneung_01.png"
        shape="normal"
        sideLength="100%"
        layout="fill"
        objectFit="cover"
      />
      <GradationFilm />
      <Content>
        <Logo>TRIP KIT</Logo>
        <WhiteText size="small" fontWeight="300">
          여행 계획을 세우기 앞서
        </WhiteText>
        <WhiteText size="2xlarge" fontWeight="500">
          가보고 싶은 곳을 먼저
        </WhiteText>
        <WhiteText size="2xlarge" fontWeight="500" margin="0 0 12px 0">
          골라볼까요?
        </WhiteText>
      </Content>
      <Submit onClick={next}>탐색하기</Submit>
    </XControlDiv>
  )
}

export default Second
