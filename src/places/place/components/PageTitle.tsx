import styled from '@emotion/styled'

import { Img, Text } from '@shared/components'
import { color } from '@shared/constants'
import { whiteImgStyle } from '@shared/styles'

export default function PageTitle() {
  const placeName = '강릉'

  return (
    <SContainer>
      <Img
        src="/images/icons/marker.png"
        sideLength="18px"
        containerCss={whiteImgStyle}
      />
      <Text color={color.white}>{placeName}</Text>
    </SContainer>
  )
}

const SContainer = styled.div`
  padding: 4px;
  border-bottom: 1px solid ${color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
