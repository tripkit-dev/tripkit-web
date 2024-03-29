import styled from '@emotion/styled'

import { Text } from '@shared/components'
import { color } from '@shared/constants'

export default function SectionTitle({ title, subTitle, hasMore }: Props) {
  return (
    <Container>
      {subTitle && (
        <Text size="small" color={color.gray06}>
          {subTitle}
        </Text>
      )}
      <Title>
        <Text size="xlarge">{title}</Text>
        {hasMore && <More>더보기</More>}
      </Title>
    </Container>
  )
}

const Container = styled.div`
  width: calc(100% - 32px);
  margin-top: 59px;
  margin-bottom: 20px;
  padding: 0 16px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`

const More = styled.button`
  width: 44px;
  height: 44px;
  background-color: #f4f3ff;
  background-image: url(/images/official/more.svg);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  color: transparent;

  outline: none;
  border: none;
`

interface Props {
  title: string
  subTitle?: string
  hasMore?: boolean
}
