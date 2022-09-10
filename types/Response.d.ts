export interface Pagination<T> {
  page: number
  size: number
  totalElements: number
  totalPages: number
  contents: T
}
