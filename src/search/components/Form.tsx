import styled from '@emotion/styled'

import { useSetRecoilState } from 'recoil'

import { useRouter } from 'next/router'

import { searchState } from '@shared/atoms/search'
import { Input, UnControlledForm } from '@shared/components'
import { combineQuery } from '@shared/libraries'

const Form = () => {
  const { push, pathname, query } = useRouter()
  const setSearchValue = useSetRecoilState(searchState)

  const handleSubmit = (value: string) => {
    push(combineQuery(pathname, { ...query, keyword: value }), undefined, {
      shallow: true
    })
    setSearchValue(value)
  }

  return (
    <Container>
      <UnControlledForm onSubmit={handleSubmit}>
        {({ ref }) => (
          <Input ref={ref} shape={'round'} placeholder="찾는 장소가 있나요?" />
        )}
      </UnControlledForm>
    </Container>
  )
}

export default Form

const Container = styled.section`
  margin-top: 28px;
`
