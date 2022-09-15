import React from 'react'

import { Size as TextSize } from '@enums/Text'

import { TravelDestination } from 'types/TravelDestination'

import { Text } from '@components/common'

interface Props {
  destination: TravelDestination
}

export const Bottom = React.memo(function Bottom({ destination }: Props) {
  return (
    <Text size={TextSize.SMALL} lineClamp={1}>
      {destination.title}
    </Text>
  )
})
