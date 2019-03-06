const router= require('express').Router();
const passport = require('passport');
const passctrl = require('../controllers/passport.controller');
// Routes
router
.route('/auth/google')
.get(passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router
.route('/auth/google/callback')
.get(passport.authenticate('google', {
    successRedirect : '/profile',
    failureRedirect : '/'
}));
router
.route('/profile')
.get(passctrl.tokenValidation,(req,res)=>{
    res.send(req.user);
});
module.exports = router;