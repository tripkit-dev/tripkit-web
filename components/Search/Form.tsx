import styled from '@emotion/styled'

import { useSetRecoilState } from 'recoil'

import { useRouter } from 'next/router'

import { Shape } from '@enums/Shape'

import { searchState } from 'atoms/search'
import { combineQuery } from 'libraries/query'

import { Input, UnControlledForm } from '@components/common'

const Form = () => {
  const { push, pathname, query } = useRouter()
  const setSearchValue = useSetRecoilState(searchState)

  const handleSubmit = (value: string) => {
    push(combineQuery(pathname, { ...query, place: value }), undefined, {
      shallow: true
    })
    setSearchValue(value)
  }

  return (
    <Container>
      <UnControlledForm onSubmit={handleSubmit}>
        {({ ref }) => (
          <Input
            ref={ref}
            shape={Shape.ROUND}
            placeholder="찾는 장소가 있나요?"
          />
        )}
      </UnControlledForm>
    </Container>
  )
}

export default Form

const Container = styled.section`
  margin-top: 28px;
`
