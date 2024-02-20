import { PaginationTransformDto } from '@/common/dto/pagination.dto'
import { ShopeeProduct } from '@/database/schemas/shopeeProduct.schema'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model, Types } from 'mongoose'

type Product = {
  _id: string
  name: string
  status: string
  ecommerce_name: string
  image: string
}

@Injectable()
export class ProductService {
  constructor(@InjectModel(ShopeeProduct.name) private shopeeProdModel: Model<ShopeeProduct>) {}

  async getShopeeProducts(query: PaginationTransformDto): Promise<Product[]> {
    const rs = await this.shopeeProdModel
      .aggregate([
        {
          $project: {
            _id: 1,
            name: 1,
            status: 1,
            image: 1,
            price: 1,
            stock: 1,
            views: 1,
            likes: 1,
            rating_star: 1,
            ecommerce_name: 'SHOPEE',
          },
        },
        {
          $sort: {
            stock: -1,
          },
        },
      ])
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
    return rs
  }

  async countShopeeProducts(filter?: FilterQuery<ShopeeProduct>): Promise<number> {
    return this.shopeeProdModel.count(filter)
  }

  async getShopeeProductDetail(_id: string): Promise<Product | null> {
    const rs = (await this.shopeeProdModel.findById(new Types.ObjectId(_id)).lean()) as Product
    return rs
  }
}
