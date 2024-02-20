import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
export type ShopeeProductDocument = HydratedDocument<ShopeeProduct>

type ShopeeModel = {
  shopee_sku: string
  original_price: number
  name: string
  modelId: string
  image: string
  current_price: number
}

@Schema({
  timestamps: true,
  collection: 'shopee_products',
})
export class ShopeeProduct {
  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  _id: Types.ObjectId

  @Prop({
    type: Number,
    required: true,
    index: true,
  })
  id: number

  @Prop({
    type: String,
    required: true,
    index: true,
  })
  shopee_sku: string

  @Prop({
    type: String,
    required: true,
    index: true,
  })
  status: string

  @Prop({
    type: Number,
  })
  price: number

  @Prop({
    type: Number,
  })
  likes: number

  @Prop({
    type: Number,
  })
  stock: number

  @Prop({
    type: Number,
  })
  views: number

  @Prop({
    type: Number,
  })
  rating_star: number

  @Prop({
    type: String,
    required: true,
  })
  name: string

  @Prop({
    type: String,
    default: null,
  })
  image: string

  @Prop({
    type: [
      {
        shopee_sku: { type: String },
        name: { type: String },
        modelId: { type: String },
        image: { type: String },
        original_price: { type: Number },
        current_price: { type: Number },
        priceIn: { type: Number },
      },
    ],
  })
  models: Array<ShopeeModel>

  @Prop({
    type: Date,
  })
  createdAt: Date

  @Prop({
    type: Date,
  })
  updatedAt: Date
}

export const ShopeeProductSchema = SchemaFactory.createForClass(ShopeeProduct)
