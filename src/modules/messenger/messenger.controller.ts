import { Controller, Get, Query, UseInterceptors } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FilterDto } from './dto/filter.dto'
import { IUserDecorator, UserDecorator } from '@/common/decorator/user.decorator'
import { IResponse } from '@/common/interface'
import { MessengerService } from './messenger.service'
import { ResponseInterceptor } from '@/common/interceptor/response.interceptor'
import { Auth } from '@/common/decorator/auth.decorator'

@UseInterceptors(ResponseInterceptor)
@ApiBearerAuth()
@ApiTags('messenger')
@Auth()
@Controller('messenger')
export class MessengerController {
  constructor(private readonly messengerService: MessengerService) {}

  @Get('/all')
  @ApiOperation({ summary: 'All messages' })
  async findAll(
    @Query() filter: FilterDto,
    @UserDecorator() user: IUserDecorator
  ): Promise<IResponse<Record<string, any>>> {
    const rs = {
      data: 1,
      value: 0,
    }
    return {
      data: rs,
      status: 'ALL_PROJECTS',
    }
  }

  @Get('/get-token')
  @ApiOperation({ summary: 'All messages' })
  async getToken(): Promise<IResponse<Record<string, any>>> {
    const token = await this.messengerService.generateToken({
      _id: '1',
      client_id: '1',
      jti: '',
      exp: 24 * 3600 * 7,
      rfr_id: 1,
      scope: [],
      tokenType: 'ACCESS_TOKEN',
      user_name: 'tabtab',
    })
    return {
      data: {
        accessToken: token,
      },
      status: 'GET TOKEN',
    }
  }
}
