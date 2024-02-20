import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common'
// import { GroupRoleName } from '../interface/auth.interface'
type GroupRoleName = Record<string, any>
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'
// import { AuthGuard } from '../guard/auth.guard'

export function Auth(...roles: GroupRoleName[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    // UseGuards(AuthGuard),
    ApiBearerAuth('JWT'),
    ApiUnauthorizedResponse({ description: 'Unauthorized' })
  )
}
