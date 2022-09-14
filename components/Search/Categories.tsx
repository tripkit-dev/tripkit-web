import styled from '@emotion/styled'

import { useRouter } from 'next/router'

import { Kind } from '@enums/Button'

import { Category } from 'types/Category'

import { combineQuery } from 'libraries/query'
import { searchCategoryModels } from 'models/category'

import { Button } from '@components/common'

interface Props {
  currentCategory: Category
}

export default function Categories({ currentCategory }: Props) {
  const { push, pathname, query } = useRouter()

  const handleCategoryClick = (category: string) => {
    push(combineQuery(pathname, { ...query, category }), undefined, {
      shallow: true
    })
  }

  return (
    <Container>
      {searchCategoryModels.map((category) => (
        <Button
          key={category.key}
          kind={
            category.key === currentCategory?.key
              ? Kind.PRIMARY
              : Kind.SECONDARY
          }
          onClick={() => handleCategoryClick(category.key)}
        >
          {category.label}
        </Button>
      ))}
    </Container>
  )
}

const Container = styled.section`
  height: 40px;
  padding: 0 32px;
  margin-top: 18px;
  overflow-y: scroll;
  text-align: center;
  white-space: nowrap;

  button {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`
