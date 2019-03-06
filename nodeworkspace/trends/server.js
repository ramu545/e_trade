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
app.use(cors());
app.use(express.static(path.join(__dirname,'src/views')));
app.use('/',userroute);
app.use('/',productrouter);
app.listen(CONFIG.port,()=>{console.log('magic happens on port 3030');});   