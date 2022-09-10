import { AxiosResponse } from 'axios'

type WithExtractData<T> = (data: any) => Promise<AxiosResponse<T> | any>

export async function withExtractData<T>(
  asyncFunc: WithExtractData<T>,
  data?: any
) {
  const result = await asyncFunc(data)

  return result.data
}
