import { Interpolation, Theme } from '@emotion/react'

import { Img } from '@shared/components'
import { mainColorFilterStyle } from '@shared/styles'

const DEFAULT_SIDE_LENGTH = '24px'

interface Props {
  sideLength?: string
  containerCss?: Interpolation<Theme>
  onClick?(): void
  isBlue?: boolean
  isFill?: boolean
}

export default function Heart({
  sideLength = DEFAULT_SIDE_LENGTH,
  containerCss,
  onClick,
  isBlue,
  isFill
}: Props) {
  const src = isFill
    ? '/images/official/heart-white-fill.svg'
    : '/images/official/heart-white.svg'

  if (isBlue) {
    return (
      <span css={mainColorFilterStyle}>
        <Img
          src={src}
          shape="normal"
          sideLength={sideLength}
          containerCss={containerCss}
          onClick={onClick}
        />
      </span>
    )
  }

  return (
    <Img
      src="/images/official/heart-white.svg"
      shape="normal"
      sideLength={sideLength}
      containerCss={containerCss}
      onClick={onClick}
    />
  )
}
