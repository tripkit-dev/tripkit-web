import type { Interpolation, Theme } from '@emotion/react'

import { Img } from '@shared/components'
import { Shape } from '@shared/enums/Shape'

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
      shape={Shape.NORMAL}
      sideLength={sideLength}
      containerCss={containerCss}
    />
  )
}
