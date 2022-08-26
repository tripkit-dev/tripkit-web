import * as s from './Profile.styled'

import { Img } from '@components/common'

export default function Profile() {
  return (
    <s.Container>
      <Img
        src="/images/img_profile_example.png"
        priority
        hasBorder
        hasNewIcon
      />
    </s.Container>
  )
}
