export interface IResponse<T> {
  message?: string
  status?: string
  data?: T | null
}

export interface IResponsePagination<T> {
  message?: string
  status?: string
  data?: {
    content: T | null
    pagination: IPagination
  }
}

export interface IPagination {
  pageable?: boolean
  totalElement?: number
  totalPage?: number
  page: number
  limit: number
}
