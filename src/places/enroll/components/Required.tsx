import { Text } from '@shared/components'
import { color } from '@shared/constants'

export default function Required() {
  return (
    <Text color={color.red05} size="xsmall">
      [필수]
    </Text>
  )
}
