import { Module } from '@nestjs/common'
import { MessengerController } from './messenger.controller'
import { MessengerService } from './messenger.service'
import { JwtService } from '@nestjs/jwt'

@Module({
  controllers: [MessengerController],
  providers: [MessengerService, JwtService],
})
export class MessengerModule {}
