import { UnauthorizedException } from '@nestjs/common'
// import { TokenVerifyObject } from '../interface/auth.interface'
import { verifyToken } from '@/utils/jwt'

type TokenVerifyObject = Record<string, any>

export async function validateToken(request: any): Promise<TokenVerifyObject> {
  const authorization = request.headers['authorization'] || ''
  const tokenType = authorization?.split(' ')[0]?.trim()
  const token = authorization.split(' ')[1]
  if (!authorization || !token || tokenType !== 'Bearer') {
    throw new UnauthorizedException({
      statusCode: 401,
      message: 'Unauthorized',
      status: 'UNAUTHORIZED',
    })
  }
  const tokenData = await verifyToken(token)
  if (!tokenData.data || tokenData.expired) {
    throw new UnauthorizedException({
      statusCode: 401,
      message: 'Token expired',
      status: 'TOKEN_EXPIRED',
    })
  }
  return tokenData
}
