import * as s from './RecommendedPlace.styled'

import React from 'react'

import { Size as TextSize } from '@enums/Text'

import { color } from '@constants/color'

import { Text } from '@components/common'

import Influencer from './Influencer'

export default function RecommendedPlace() {
  return (
    <>
      <s.Title>
        <Text size={TextSize.SMALL} color={color.gray02}>
          여행 블로거들은 어디로 갈까?
        </Text>
        <Text size={TextSize.LARGE}>추천 장소</Text>
      </s.Title>
      <Influencer />
    </>
  )
}
