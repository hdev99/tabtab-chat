import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
export type CustomerDocument = HydratedDocument<Customer>

@Schema({
  timestamps: true,
  collection: 'customers',
})
export class Customer {
  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  _id: Types.ObjectId

  @Prop({
    type: String,
    required: true,
    unique: true,
    index: true,
  })
  code: string

  @Prop({
    type: String,
    required: true,
  })
  name: string

  @Prop({
    type: Date,
  })
  createdAt: Date

  @Prop({
    type: Date,
  })
  updatedAt: Date
}

export const CustomerSchema = SchemaFactory.createForClass(Customer)
