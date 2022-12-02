import type { NextPage } from 'next'

import { Layout, PublicNavigation } from '@mypage/components'

const MyPage: NextPage = () => {
  return <Layout inner={<PublicNavigation />} />
}

export default MyPage
