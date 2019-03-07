const router = require('express').Router();

const userctrl = require('../controllers/user.controller');
const prodctrl = require('../controllers/product.ctrl');



router
.route('/products/product')
.post(prodctrl.productupload);//userctrl.authentication,

router
.route('/products')
.get(userctrl.authentication,prodctrl.products);

module.exports= router;