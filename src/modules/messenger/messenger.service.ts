import { TokenPayloadDto } from '@/common/dto/token-payload.dto'
import { TokenVerifyObject } from '@/common/interface'
import configuration from '@/configs/configuration'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class MessengerService {
    constructor(
        private jwtService: JwtService
      ) {}

    async generateToken(payload: TokenPayloadDto, expiredTime = new Date(Date.now() + 5 * 60 * 1000)): Promise<string> {
        try {
          const exp = expiredTime.getTime()
          const secretKey = configuration().jwtSecretKey
          const token = this.jwtService.sign(
            { ...payload, exp },
            {
              secret: secretKey,
            }
          )
          return token
        } catch (error) {
          console.log('>>> / file: auth.service.ts / generateToken', error)
          return ''
        }
      }
    
      async verifyToken(token: string): Promise<TokenVerifyObject> {
        try {
          //
          const secretKey = configuration().jwtSecretKey
          const data = (await this.jwtService.verify(token, { secret: secretKey })) as TokenPayloadDto
          return {
            expired: data?.exp < Date.now(),
            data,
          }
        } catch (error) {
          console.log('>>> / file: auth.service.ts / verifyToken', error)
          return {
            expired: true,
            data: null,
          }
        }
      }
}
