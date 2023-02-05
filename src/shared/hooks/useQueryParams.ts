import { useRouter } from 'next/router'
import { useMemo } from 'react'

interface Props {
  [key: string]: string | string[] | number
}

export default function useQueryParams<T>(initialQueryParams: Props) {
  const { query } = useRouter()

  const queryParams = useMemo(
    () =>
      Object.keys(initialQueryParams).reduce((prev, curr) => {
        const initialValue = initialQueryParams[curr]

        return {
          ...prev,
          [curr]: query[curr] || initialValue
        }
      }, {}) as T,
    [initialQueryParams, query]
  )

  return queryParams
}
