import { DocumentBuilder } from '@nestjs/swagger'
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'

const bearerTokenSecurityScheme: SecuritySchemeObject = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
}

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Tabtab Chat Swagger')
  .setDescription('The Tabtab Chat API description')
  .setVersion('1.0.1')
  .addTag('Tabtab Chat')
  .addBearerAuth(bearerTokenSecurityScheme)
  .setLicense('MIT', '')
  .build()
