const router = require('express').Router();
const smsroute = require('../conytrollers/sms.controller');
router
.route('/sms')
.post(smsroute.smslogic);

module.exports = router;