const mongoose = require('mongoose');
let usermodel = new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    googleImage:{
        type:String,
        required:true
    },
    googleToken:{
        type:String,
        required:true
    }
});
mongoose.model("User",usermodel,"users");