import styled from '@emotion/styled'

import { Button, TimePickerType } from '@shared/components'
import { Image } from '@shared/types'

interface Props {
  answers: AnswerType
}

export default function Submit({ answers }: Props) {
  const categories = answers.categories as string[] | undefined
  const placeName = answers.placeName as string | undefined

  const isEnabled = categories && placeName && categories.length > 0

  return (
    <SContainer>
      <SSubmit
        size="large"
        kind={isEnabled ? 'primary' : 'secondary'}
        shape="semi-round"
        onClick={() => {
          if (!isEnabled) {
            alert('필수 항목을 입력해주세요')
            return
          }

          alert(JSON.stringify(answers))
        }}
      >
        장소 알리기
      </SSubmit>
    </SContainer>
  )
}

const SContainer = styled.section`
  margin: 24px auto;
  text-align: center;
`

const SSubmit = styled(Button)`
  width: 80vw;
  max-width: 320px;
`

export interface AnswerType {
  [key: string]: string | string[] | TimePickerType | Image[] | undefined
}
