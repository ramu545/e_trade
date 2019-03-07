require('./models/conection');
//require('./twilio/sendsms');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const CONFIG = require('./models/config');
const userroute = require('./routers/user.route');
const productrouter = require('./routers/product.routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//create a cors middleware
// app.use(function(req, res, next) {
//     //set headers to allow cross origin request.
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     });

app.use(cors());
app.use(express.static(path.join(__dirname,'uploads')));
app.use('/',userroute);
app.use('/',productrouter);
app.listen(CONFIG.port,()=>{console.log('magic happens on port 3030');});   