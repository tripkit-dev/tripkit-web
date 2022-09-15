import React from 'react'

import { Size as TextSize } from '@enums/Text'

import { TravelDestination } from 'types/TravelDestination'

import { Text } from '@components/common'
import { MyPageCards } from '@components/MyPage'

interface Props {
  destination: TravelDestination
}

export function Bottom({ destination }: Props) {
  return (
    <>
      <MyPageCards.People srcs={destination.peoples} />
      <Text size={TextSize.SMALL} lineClamp={1}>
        {destination.title}
      </Text>
    </>
  )
}
