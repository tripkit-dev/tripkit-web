import styled from '@emotion/styled'

import { useEffect } from 'react'

import { color } from '@shared/constants'
import { usePopup } from '@shared/hooks'

export default function Popup() {
  const [popup, handler] = usePopup()

  useEffect(() => {
    if (!popup.content) return

    document.body.classList.add('popupActive')
    document.querySelector('#__next')?.classList.add('overflowHidden')
    document.querySelector('html')?.classList.add('overflowHidden')

    return () => {
      document.body.classList.remove('popupActive')
      document.querySelector('#__next')?.classList.remove('overflowHidden')
      document.querySelector('html')?.classList.remove('overflowHidden')
    }
  }, [popup])

  if (!popup.content) {
    return null
  }

  return (
    <SPopup>
      {popup.options?.isDimmed && <Dimmed onClick={handler.close} />}
      {popup.content}
    </SPopup>
  )
}

const SPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
  scroll
`

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.transparentBlack30};
`
