import { TokenPayloadDto } from '../dto/token-payload.dto'

export * from './response.interface'

export type OverrideStringId<T> = Omit<T, '_id'> & { _id: string }

export interface TokenVerifyObject {
    expired: boolean
    data?: TokenPayloadDto
  }
