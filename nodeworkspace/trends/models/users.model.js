const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
}
//,{ capped: { size: 1024, max: 1000, autoIndexId: true } }
);

mongoose.model('User',userSchema,'users');