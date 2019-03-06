const router = require('express').Router();

const userctrl = require('../conytrollers/user.controller');
const prodctrl = require('../conytrollers/product.ctrl');



router
.route('/products/product')
.post(userctrl.authentication,prodctrl.productupload);

router
.route('/products')
.get(userctrl.authentication,prodctrl.products);

module.exports= router;