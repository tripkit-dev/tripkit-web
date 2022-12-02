import type { NextPage } from 'next'

import { MyPageLayout, PublicNavigation } from '@mypage/components'

const MyPage: NextPage = () => {
  return <MyPageLayout inner={<PublicNavigation />} />
}

export default MyPage
