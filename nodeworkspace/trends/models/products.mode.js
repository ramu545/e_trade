const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    ,
    largeImage:{
        type:String,
        required:true
    }
});
mongoose.model("Product",productSchema,'products');
