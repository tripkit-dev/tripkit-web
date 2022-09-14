import { AxiosResponse } from 'axios'
import qs from 'qs'

type WithExtractData<T> = (data: any) => Promise<AxiosResponse<T> | any>

export async function withExtractData<T>(
  asyncFunc: WithExtractData<T>,
  data?: any
) {
  const result = await asyncFunc(data)

  return result.data
}

export function getQuery(
  key: string,
  defaultValue: string | number = ''
): string {
  if (typeof window === 'undefined') return ''

  const params = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
  })

  return (params[key] || defaultValue) as string
}

export function combineQuery(path: string, query: object): string {
  const newQuery = { ...query } as any

  Object.keys(newQuery).forEach((key) => {
    if (!newQuery[key]) delete newQuery[key]
  })

  return `${path}${qs.stringify(newQuery, {
    addQueryPrefix: true
  })}`
}
