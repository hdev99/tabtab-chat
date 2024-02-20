import { PaginationTransformDto } from '@/common/dto/pagination.dto'
import { Customer } from '@/database/schemas/customer.schema'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer.name) private customerModel: Model<Customer>) {}

  async getAllCustomers(query: PaginationTransformDto): Promise<Customer[]> {
    //
    return await this.customerModel
      .find()
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .lean()
  }
}
