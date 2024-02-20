import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ConfigModule } from '@nestjs/config'
import configuration from './configs/configuration'

import { MongooseModule } from '@nestjs/mongoose'

// import config
import config from './database/mongdo.config'
import { envConfigValidator } from './configs/env.config'
import { MessengerModule } from './modules/messenger/messenger.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: envConfigValidator,
      load: [configuration],
    }),
    MongooseModule.forRoot(config().uri),
    MessengerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
