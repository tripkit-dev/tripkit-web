import { whiteImgStyle } from 'styles/common.styled'

import { Shape } from '@enums/Shape'

import { Img } from '@components/common'

const DEFAULT_SIDE_LENGTH = '24px'

interface Props {
  sideLength?: string
}

export default function Heart({ sideLength = DEFAULT_SIDE_LENGTH }: Props) {
  return (
    <Img
      src="/images/sample/heart.svg"
      shape={Shape.NORMAL}
      sideLength={sideLength}
      containerCss={whiteImgStyle}
    />
  )
}
