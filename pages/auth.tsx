import React, { ReactElement } from 'react'

import { Auth } from '@auth/components'

export default function AuthPage() {
  return <Auth />
}

AuthPage.getLayout = (page: ReactElement) => <>{page}</>
