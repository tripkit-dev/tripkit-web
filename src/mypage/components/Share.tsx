import React from 'react'

import { Text } from '@shared/components'
import { Size as TextSize } from '@shared/enums/Text'
import { TravelDestination } from '@shared/types/TravelDestination'

import { Heart } from './Cards'

interface Props {
  destination: TravelDestination
}

export default function Share({ destination }: Props) {
  return (
    <>
      <Heart sideLength="24px" />
      <Text size={TextSize.SMALL} lineClamp={1}>
        {destination.title}
      </Text>
    </>
  )
}
