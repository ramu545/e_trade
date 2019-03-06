require('./users.model');
require('./products.mode');
const mongoose = require('mongoose');
const CONFIG = require('../models/config');
const options = {
    useNewUrlParser: true
}
//mongoose.connect(CONFIG.dburl,options);
mongoose.connect(CONFIG.dburl,options );

const conection = mongoose.connection
conection.once('open',()=>{
  console.log(`mongodb Connected successfully withmongoose ..!`);
});

conection.on('error',()=>{
    console.log(`mongoDB Conectionfaild withmongoose..?`);
});