import styled from '@emotion/styled'

import React, { createContext, useCallback, useContext, useState } from 'react'

const modalContext = createContext<ModalContext>({})

interface Props {
  children?: React.ReactNode
}

export default function ModalProvider({ children }: Props) {
  const [element, setElement] = useState<React.ReactNode>(null)

  const open = useCallback(
    (_element: React.ReactNode) => setElement(_element),
    []
  )
  const close = useCallback(() => setElement(null), [])

  return (
    <modalContext.Provider value={{ open, close }}>
      {element && (
        <SDimmed
          id="dimmed"
          onClick={({ target }) => {
            const id = (target as HTMLElement).id

            if (id === 'dimmed') {
              close()
            }
          }}
        >
          {element}
        </SDimmed>
      )}
      {children}
    </modalContext.Provider>
  )
}

export function useModal() {
  return useContext(modalContext)
}

const SDimmed = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.15);
`

interface ModalContext {
  open?(element: React.ReactNode): void
  close?(): void
}
