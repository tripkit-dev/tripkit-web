import { AxiosResponse } from 'axios'
import qs from 'qs'

export async function withExtractData<T>(
  asyncFunc: WithExtractData<T>,
  data?: any
) {
  const result = await asyncFunc(data)

  return result.data
}

export function getQuery<T>(
  key: string,
  defaultValue: string | number = ''
): string | T {
  if (typeof window === 'undefined') return String(defaultValue || '')

  const params = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
  })

  return (params[key] || defaultValue) as string
}

export function combineQuery(path: string, query?: object): string {
  if (!query) return path

  const newQuery = { ...query } as any

  Object.keys(newQuery).forEach((key) => {
    if (!newQuery[key]) delete newQuery[key]
  })

  return `${path}${qs.stringify(newQuery, {
    addQueryPrefix: true
  })}`
}

type WithExtractData<T> = (data: any) => Promise<AxiosResponse<T> | any>
