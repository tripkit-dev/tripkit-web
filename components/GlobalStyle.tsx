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
            user-select: none;
            -webkit-user-select: none;
          }

          html,
          body,
          #__next {
            overflow: hidden;
            margin: 0;
            width: 100%;
            height: 100%;
          }

          #__next {
            overflow: hidden;
            overflow-y: auto;
          }

          ul,
          ol {
            margin: 0;
            padding: 0;
          }

          a {
            color: inherit;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }

          button {
            outline: none;
            border: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        `}
      />
      {children}
    </>
  )
}
