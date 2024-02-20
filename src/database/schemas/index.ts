import { ModelDefinition } from '@nestjs/mongoose'
import { Customer, CustomerSchema } from './customer.schema'
import { ShopeeProduct, ShopeeProductSchema } from './shopeeProduct.schema'

export const DatabaseModels: ModelDefinition[] = [
  { name: Customer.name, schema: CustomerSchema },
  { name: ShopeeProduct.name, schema: ShopeeProductSchema },
]
