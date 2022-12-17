import { Fragment, useCallback, useState } from 'react'

import { Header, TimePickerType } from '@shared/components'
import { color } from '@shared/constants'
import { Image } from '@shared/types'

import {
  AnswerType,
  BusinessDays,
  BusinessHours,
  BusinessTimeType,
  FileUploader,
  FormRow,
  ImagePreviews,
  PlaceName,
  Required,
  SelectCategory,
  Submit
} from '@enroll/components'

export default function Enroll() {
  const [answers, setAnswers] = useState<AnswerType>({})

  function handleAnswer(answer: AnswerType) {
    setAnswers((prev) => ({ ...prev, ...answer }))
  }

  const handleCategories = useCallback(
    (categories: string[]) => handleAnswer({ categories }),
    []
  )

  const handlePlacName = useCallback(
    (placeName: string) => handleAnswer({ placeName }),
    []
  )

  const handleFiles = useCallback(
    (images: Image[]) => handleAnswer({ images }),
    []
  )

  const handleBusinessDays = useCallback(
    (businessDays: string[]) => handleAnswer({ businessDays }),
    []
  )

  const handleTime = useCallback(
    (time: BusinessTimeType) => handleAnswer({ ...time }),
    []
  )

  return (
    <Fragment>
      <Header backgroundColor={color.gray08} />
      <FormRow
        top={{
          title: '무엇을 하는 곳인가요?',
          right: <Required />
        }}
        middle={{
          description: '다중 선택 가능합니다',
          element: (
            <SelectCategory
              values={answers.categories as string[]}
              onChange={handleCategories}
            />
          )
        }}
      />
      <FormRow
        top={{
          title: '장소명을 알려주세요!',
          right: <Required />
        }}
        middle={{
          description: '정확한 장소명을 알려주셔야 정보 확인이 가능합니다',
          element: (
            <PlaceName
              value={answers.placeName as string}
              onChange={handlePlacName}
            />
          )
        }}
      />
      <FormRow
        top={{
          title: '사진이 있다면 더욱 좋아요!',
          right:
            answers.images === undefined ? (
              <FileUploader
                images={answers.images as Image[] | undefined}
                onChange={handleFiles}
              />
            ) : null
        }}
        middle={{
          element:
            answers.images !== undefined ? (
              <ImagePreviews
                images={answers.images as Image[]}
                onChange={handleFiles}
              />
            ) : null
        }}
      />
      <FormRow
        top={{
          title: '운영시간을 알려주세요!'
        }}
        middle={{
          description:
            '더욱 정확한 정보를 주시면 빠른 장소 업데이트가 가능합니다',
          element: (
            <BusinessHours
              open={answers.open as TimePickerType}
              close={answers.close as TimePickerType}
              onChange={handleTime}
            />
          )
        }}
        bottom={{
          description: '운영 요일을 표기해주세요',
          element: <BusinessDays onChange={handleBusinessDays} />
        }}
      />
      <Submit answers={answers} />
    </Fragment>
  )
}
