import type { NextPage } from 'next'

import { MyPageLayout, PublicNavigation } from '@components/MyPage'

const MyPage: NextPage = () => {
  return <MyPageLayout inner={<PublicNavigation />} />
}

export default MyPage
