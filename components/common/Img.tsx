import styled from '@emotion/styled'

import { useState } from 'react'

import NextImage, { ImageProps } from 'next/image'

import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css } from '@emotion/react'

interface SImageProps {
  shape?: Shape
  hasNewIcon?: boolean
  hasBorder?: boolean
}

interface Props extends SImageProps, ImageProps {
  src: string
  notSSR?: boolean
}

const Img = ({
  shape = Shape.ROUND,
  hasNewIcon,
  hasBorder,
  notSSR,
  src,
  ...props
}: Props) => {
  const [isError, setIsError] = useState<boolean>(false)
  const sideLength = hasBorder ? '56px' : '58px'

  return (
    <Container
      shape={shape}
      hasNewIcon={hasNewIcon}
      hasBorder={hasBorder}
      isError={isError}
    >
      {notSSR ? (
        <picture>
          <source srcSet={src} type="image/webp" />
          <img
            src={src}
            alt="img"
            width={sideLength}
            height={sideLength}
            {...props}
          />
        </picture>
      ) : (
        <NextImage
          src={src}
          width={sideLength}
          height={sideLength}
          onError={() => {
            setIsError(true)
          }}
          {...props}
        />
      )}
    </Container>
  )
}

export default Img

const Container = styled.span<SImageProps & { isError: boolean }>`
  display: inline-block;
  width: 56px;
  height: 56px;
  position: relative;

  ${({ shape }) => styles[shape!]}
  ${({ hasNewIcon }) => (hasNewIcon ? styles.new : '')}
  ${({ hasBorder }) => (hasBorder ? styles.border : '')}
  ${({ isError }) => (isError ? styles.placeholder : '')}
`

const styles = {
  [Shape.NORMAL]: css``,
  [Shape.ROUND]: css`
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `,
  new: css`
    &::before {
      content: ' ';
      width: 14px;
      height: 14px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      background-color: ${color.main};
      z-index: 999;
    }
  `,
  border: css`
    width: 56px;
    height: 56px;
    border: 1px solid ${color.main};
  `,
  placeholder: css`
    background-color: ${color.gray02};
  `
}
