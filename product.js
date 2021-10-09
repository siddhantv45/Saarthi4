const mongoose = require('mongoose');
const productSchema=new mongoose.Schema({
    
    name: {
        type: String,
        required: [true,'tell your product name']
      },

    isbn: {
      type: Number,
      required: [true,'tell this']
    },

    authors:{
      type: String,
      required:[true,'authors name']
    },
    number_of_pages:{
      type: Number,
      required:[true]
    },

    publisher:{
      type:String,
      required:[true]
    },
    
    country:{
      type:String,
      required:[true]
    },

    release:{
      type:Date,
      default: Date.now
    }

},
{ collection: 'product' }

)
const Product = mongoose.model('Product', productSchema);

module.exports = Product;