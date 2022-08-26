import * as s from './Search.styled'

import React, { useRef } from 'react'

import { Kind as ButtonKind, Size } from '@enums/Button'
import { Kind as InputKind } from '@enums/Input'
import { Shape } from '@enums/Shape'

import { Button, Input } from '@components/common'

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()
    if (!inputRef.current) return

    console.log(inputRef.current.value)

    inputRef.current.value = ''
  }

  return (
    <s.Form onSubmit={handleSearch}>
      <Input
        ref={inputRef}
        kind={InputKind.TERTIARY}
        shape={Shape.ROUND}
        placeholder="어디로 놀러가세요?"
      />

      <Button
        size={Size.X_LARGE}
        kind={ButtonKind.TERTIARY}
        onClick={handleSearch}
        label="검색"
      />
    </s.Form>
  )
}

export default Search
