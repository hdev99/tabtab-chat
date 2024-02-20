import { ApiProperty } from '@nestjs/swagger'

export class FilterDto  {
    @ApiProperty({
      example: 1,
      description: 'Page number',
      required: false,
    })
    page?: number

    @ApiProperty({
      example: 10,
      description: 'Num of elements',
      required: false,
    })
    limit?: number
  }
