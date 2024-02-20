import { ApiProperty } from '@nestjs/swagger'
import { Types } from 'mongoose'

export class TokenPayloadDto {
  @ApiProperty({ example: '0abcod' })
  _id: string

  @ApiProperty({ example: 'johnweel' })
  user_name: string

  @ApiProperty({ example: 1 })
  rfr_id: number

  @ApiProperty({ example: 'fbClient' })
  client_id: string

  @ApiProperty({ example: ['FASTBOOK_SCOPE'] })
  scope: string[]

  @ApiProperty({ example: 1681394161 })
  exp: number

  @ApiProperty({ example: 'bc9c2dc8-a192-4c8f-9a74-395542c9a939' })
  jti: string

  @ApiProperty({ example: 'ACCESS_TOKEN' })
  tokenType: 'ACCESS_TOKEN' | 'REFRESH_TOKEN'

  constructor(patial: Partial<TokenPayloadDto>) {
    Object.assign(this, patial)
  }
}
