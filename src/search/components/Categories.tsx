import styled from '@emotion/styled'

import { useRouter } from 'next/router'

import { Button } from '@shared/components'
import { combineQuery } from '@shared/libraries'

import { searchCategoryModels } from '@search/models'
import { Category } from '@search/types'

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
            category.key === currentCategory?.key ? 'primary' : 'quaternary'
          }
          size="small"
          onClick={() => handleCategoryClick(category.key)}
        >
          {category.emoji + '  ' + category.label}
        </Button>
      ))}
    </Container>
  )
}

const Container = styled.section`
  height: 26px;
  padding: 0 32px;
  margin-top: 18px;
  padding-bottom: 18px;
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

interface Props {
  currentCategory: Category
}
