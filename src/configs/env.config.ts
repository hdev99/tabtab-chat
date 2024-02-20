import { plainToInstance } from 'class-transformer'
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator'

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment

  @IsNumber()
  NEST_APP_PORT: number

  @IsNumber()
  ACCESS_TOKEN_EXPIRE_HOUR: number

  @IsNumber()
  REFRESH_TOKEN_EXPIRE_HOUR: number

  @IsString()
  NEST_APP_MONGODB_USERNAME: string

  @IsString()
  NEST_APP_MONGODB_PASSWORD: string

  @IsString()
  NEST_APP_MONGODB_CLUSTER: string

  @IsString()
  NEST_APP_MONGODB_DATABASE: string
}

export function envConfigValidator(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true })
  const errors = validateSync(validatedConfig, { skipMissingProperties: false })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validatedConfig
}
