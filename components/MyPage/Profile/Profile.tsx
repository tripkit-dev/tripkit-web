import * as s from './Profile.styled'

import { Size as TextSize } from '@enums/Text'

import { color } from '@constants/color'

import { Img, Text } from '@components/common'

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
        <Text size={TextSize.SMALL} lineClamp={1} color={color.main}>
          엄준시크님
        </Text>
        <Text size={TextSize.X_SMALL} lineClamp={1}>
          이번 주 초대된 여행이 있습니다!
        </Text>
      </s.TextBox>
    </s.Container>
  )
}
