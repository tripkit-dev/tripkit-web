import React from 'react'

import { Size as TextSize } from '@enums/Text'

import { TravelDestination } from 'types/TravelDestination'

import { Text } from '@components/common'

import { Heart } from './Cards'

interface Props {
  destination: TravelDestination
}

export function Bottom({ destination }: Props) {
  return (
    <>
      <Heart sideLength="24px" />
      <Text size={TextSize.SMALL} lineClamp={1}>
        {destination.title}
      </Text>
    </>
  )
}
