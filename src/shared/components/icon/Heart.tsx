import type { Interpolation, Theme } from '@emotion/react'

import { Img } from '@shared/components'

const DEFAULT_SIDE_LENGTH = '24px'

interface Props {
  sideLength?: string
  containerCss?: Interpolation<Theme>
}

export default function Heart({
  sideLength = DEFAULT_SIDE_LENGTH,
  containerCss
}: Props) {
  return (
    <Img
      src="/images/sample/heart.svg"
      shape="normal"
      sideLength={sideLength}
      containerCss={containerCss}
    />
  )
}
