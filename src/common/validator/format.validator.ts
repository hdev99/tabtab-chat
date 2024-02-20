import { Types } from 'mongoose'

export function isValidObjectId(input: string): boolean {
  return Types.ObjectId.isValid(input)
}
