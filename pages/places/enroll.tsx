import { css } from '@emotion/react'

import React, { useCallback, useState } from 'react'

import { Button, Header } from '@shared/components'
import { TimePickerType } from '@shared/components/form/TimePicker'
import { color } from '@shared/constants'

import {
  BusinessDays,
  BusinessHours,
  FileUploader,
  FormRow,
  PlaceName,
  Required,
  SelectCategory
} from '@places/enroll'
import { BusinessTimeType } from '@places/enroll/components/BusinessHours'

export default function Enroll() {
  const [answers, setAnswers] = useState<Answer>({})

  function handleAnswer(answer: Answer) {
    setAnswers((prev) => ({ ...prev, ...answer }))
  }

  const handleCategories = useCallback(
    (categories: string[]) => handleAnswer({ categories }),
    []
  )

  const handleFiles = useCallback(
    (images: File[]) => handleAnswer({ images }),
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
    <>
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
              value={answers.categories}
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
              value={answers.placeName}
              onChange={(placeName) => handleAnswer({ placeName })}
            />
          )
        }}
      />
      <FormRow
        top={{
          title: '사진이 있다면 더욱 좋아요!',
          right: <FileUploader onChange={handleFiles} />
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
      <section
        css={css`
          margin: 24px auto;
          text-align: center;
        `}
      >
        <Button
          size="large"
          kind="secondary"
          shape="semi-round"
          onClick={() => alert(JSON.stringify(answers))}
          cssStyle={css`
            width: 80vw;
            max-width: 320px;
          `}
        >
          장소 알리기
        </Button>
      </section>
    </>
  )
}

interface Answer {
  [key: string]: any
}
