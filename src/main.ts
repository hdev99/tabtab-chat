import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import helmet from 'helmet'
import config from './configs/configuration'
import { swaggerConfig } from './configs/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com', 'cdn.jsdelivr.net'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    })
  )
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: '*',
  })

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)

  await app.listen(config().port)
  console.log(`Application is running on port: ${config().port}`)
  if (config().nodeEnv == 'development') {
    console.log(`Application has been serving at: http://localhost:${config().port}`)
    console.log(`Swagger service has been serving at: http://localhost:${config().port}/api`)
  }
}
bootstrap()
