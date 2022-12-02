import * as s from './Profile.styled'

import { Img, Text } from '@shared/components'
import { color } from '@shared/constants'

export default function Profile() {
  return (
    <s.Container>
      <Img
        src="/images/img_profile_example.png"
        sideLength="68px"
        priority
        hasBorder
        hasNewIcon
        isIconLeft
      />

      <s.TextBox>
        <Text size="small" lineClamp={1} color={color.main}>
          엄준시크님
        </Text>
        <Text size="xsmall" lineClamp={1}>
          이번 주 초대된 여행이 있습니다!
        </Text>
      </s.TextBox>
    </s.Container>
  )
}
