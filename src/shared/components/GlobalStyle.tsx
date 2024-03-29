import { css, Global } from '@emotion/react'

import React from 'react'

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
            margin: 0;
          }

          #__next {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            overflow-y: auto;
          }

          * {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          *::-webkit-scrollbar {
            display: none;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
          }

          ul,
          ol {
            list-style: none;
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

          .popupActive {
            position: relative;
            overflow: hidden;
          }

          .overflowHidden {
            overflow: hidden;
          }
        `}
      />
      {children}
    </>
  )
}

interface Props {
  children: React.ReactNode
}
