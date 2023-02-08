import styled from '@emotion/styled'

import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import { Select } from '@shared/components'

import { searchCategoryModels } from '@search/models'

export default function CategorySelector() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { replace, pathname, query } = useRouter()

  const currentCategory = query.category

  const handleCategoryChange = (category: string) => {
    replace(
      {
        pathname,
        query: { ...query, category }
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  useEffect(() => {
    if (!currentCategory) {
      return
    }

    const target = document.querySelector(`#${currentCategory}`) as HTMLElement

    containerRef.current?.scrollTo({
      left: target?.offsetLeft - window.innerWidth / 2,
      behavior: 'smooth'
    })
  }, [currentCategory])

  return (
    <Container ref={containerRef}>
      <Select
        list={searchCategoryModels.map((category) => ({
          ...category,
          label: category.emoji + '  ' + category.label
        }))}
        value={currentCategory}
        onChange={handleCategoryChange}
      />
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
