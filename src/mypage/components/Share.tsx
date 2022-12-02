import React from 'react'

import { Text } from '@shared/components'
import { TravelDestination } from '@shared/types/TravelDestination'

import { Heart } from './Cards'

interface Props {
  destination: TravelDestination
}

export default function Share({ destination }: Props) {
  return (
    <>
      <Heart sideLength="24px" />
      <Text size="small" lineClamp={1}>
        {destination.title}
      </Text>
    </>
  )
}
