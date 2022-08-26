import * as s from './Weather.styled'

import { Img } from '@components/common'

export default function Weather() {
  return (
    <s.Container>
      <Img src="" priority alt="날씨아이콘" />
      <s.Description>
        오늘의 날씨 :<s.Status>맑음</s.Status>
      </s.Description>
    </s.Container>
  )
}
