// import { TokenPayloadDto } from '@/auth/dto/auth.dto'
// import { TokenVerifyObject } from '@/common/interface/auth.interface'
import configuration from '@/configs/configuration'
import { JwtService } from '@nestjs/jwt'

type TokenPayloadDto = Record<string, any>
type TokenVerifyObject = Record<string, any>

export async function generateToken(payload: TokenPayloadDto, expireHourTime = 1): Promise<string> {
  try {
    const exp = Math.floor(Date.now() + expireHourTime * 3600 * 1000)
    const secretKey = configuration().jwtSecretKey
    const token = new JwtService().sign({ ...payload, exp }, { secret: secretKey })
    return token
  } catch (error) {
    console.log('>>> / file: jwt.ts / generateToken', error)
    return ''
  }
}

export async function verifyToken(token: string): Promise<TokenVerifyObject> {
  try {
    //
    const secretKey = configuration().jwtSecretKey
    const data = (await new JwtService().verify(token, { secret: secretKey })) as TokenPayloadDto
    return {
      expired: data?.exp < Date.now(),
      data,
    }
  } catch (error) {
    console.log('>>> / file: jwt.ts / verifyToken', error)
    return {
      expired: true,
      data: null,
    }
  }
}
