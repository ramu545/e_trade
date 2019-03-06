const router = require('express').Router();
const userctrl = require('../conytrollers/user.controller');
//register
router
.route('/register')
.post(userctrl.register);

router
.route('/login')
.post(userctrl.loginuser);
 
router
.route('/profile/:id')
.get(userctrl.authentication,userctrl.profile);

router
.route('/user/:id/:name')
.put(userctrl.authentication,userctrl.updateUser);

router
.route('/user/:id')
.delete(userctrl.authentication,userctrl.deleteUser);

module.exports = router;