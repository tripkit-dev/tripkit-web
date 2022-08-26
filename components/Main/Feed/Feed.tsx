import * as s from './Feed.styled'

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
    </s.Container>
  )
}
