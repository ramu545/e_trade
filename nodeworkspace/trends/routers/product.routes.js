const router = require('express').Router();

const userctrl = require('../controllers/user.controller');
const prodctrl = require('../controllers/product.ctrl');

router
.route('/product')
.post(userctrl.authentication,prodctrl.productupload);

router
.route('/products')
.get(userctrl.authentication,prodctrl.products);

module.exports= router;