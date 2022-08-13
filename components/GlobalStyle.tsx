import React from 'react'

import { css, Global } from '@emotion/react'

interface Props {
  children: React.ReactNode
}

export default function GlobalStyle({ children }: Props) {
  return (
    <>
      <Global
        styles={css`
          * {
            font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
              sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}
      />
      {children}
    </>
  )
}
