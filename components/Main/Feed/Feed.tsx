import * as s from './Feed.styled'

import { Shape } from '@enums/Shape'

import { Img as BgImg } from '@components/common'

import Profile from './Profile'
import Search from './Search'
import Weather from './Weather'

export default function Feed() {
  return (
    <s.Container>
      <s.Inner>
        <Profile />
        <Weather />
        <Search />
      </s.Inner>

      <BgImg
        shape={Shape.NORMAL}
        src="/images/bg_feed.png"
        priority
        isFull
        layout="fill"
        objectFit="cover"
        containerCSS={s.BgImgStyle}
      />
    </s.Container>
  )
}
