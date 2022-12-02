import React from 'react'

import { Text } from '@shared/components'
import { TravelDestination } from '@shared/types'

export default React.memo(function Own({ destination }: Props) {
  return (
    <Text size="small" lineClamp={1}>
      {destination.title}
    </Text>
  )
})

interface Props {
  destination: TravelDestination
}
