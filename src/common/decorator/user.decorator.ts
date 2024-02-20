import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { validateToken } from '../validator/auth.validator'
import { TokenPayloadDto } from '../dto/token-payload.dto'

export const UserDecorator = createParamDecorator(async (field: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const { data } = await validateToken(request)
  return field ? data?.[field] : data
})

export interface IUserDecorator extends Omit<TokenPayloadDto, '_id'> {
  _id: string
  client_id: string
  exp: number
  scope: string[]
  tokenType: 'ACCESS_TOKEN' | 'REFRESH_TOKEN'
  user_name: string
}
