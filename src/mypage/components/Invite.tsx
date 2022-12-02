import React from 'react'

import { Text } from '@shared/components'
import { TravelDestination } from '@shared/types/TravelDestination'

import { People } from './Cards'

interface Props {
  destination: TravelDestination
}

export default function Invite({ destination }: Props) {
  return (
    <>
      <People srcs={destination.peoples} />
      <Text size="small" lineClamp={1}>
        {destination.title}
      </Text>
    </>
  )
}
