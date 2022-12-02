import React from 'react'

import { Text } from '@shared/components'
import { TravelDestination } from '@shared/types/TravelDestination'

interface Props {
  destination: TravelDestination
}

export default React.memo(function Own({ destination }: Props) {
  return (
    <Text size="small" lineClamp={1}>
      {destination.title}
    </Text>
  )
})
