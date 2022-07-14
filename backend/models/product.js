import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String
      },
      sku: {
        type: String
      },
      productAmount: {
        type: Number
      },
      productImg: {
        type: String
      },
      status: {
        type: String,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
      }
})

const ProductList = mongoose.model('feature_products', productSchema)

export default ProductList;
