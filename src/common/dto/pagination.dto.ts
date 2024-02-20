import { ApiProperty } from '@nestjs/swagger'

export class PaginationQueryDto {
  @ApiProperty({ description: 'page', required: true, default: 1 })
  page: string | number = '1'

  @ApiProperty({ description: 'limit', required: true, default: 10 })
  limit: string | number = '10'
}

export class PaginationTransformDto {
  page: number
  limit: number
  constructor(query?: PaginationQueryDto) {
    if (!query) {
      this.page = 1
      this.limit = 10
    } else {
      for (const key in query) {
        this[key] = Number(query[key])
      }
    }
  }
}

export class Pageable extends PaginationTransformDto {
  totalElements: number
  constructor(init: Pageable) {
    super({ limit: init.limit.toString(), page: init.page.toString() })
    Object.assign(this, init)
  }
}

export interface PaginationResponseDto<T> {
  content: T
  pagination: Pageable
}

export interface PaginationModelQuery<T> {
  data: T
  count: number
}
