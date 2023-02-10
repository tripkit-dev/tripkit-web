import { Auth } from 'auth/components'
import React, { ReactElement } from 'react'

export default function AuthPage() {
  return <Auth />
}

AuthPage.getLayout = (page: ReactElement) => <>{page}</>
