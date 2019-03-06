const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt=require('jsonwebtoken');
const User = mongoose.model('User');
const CONFIG = require('../config/config');
//const passport = require('../../server');

passport.serializeUser((user, done) => {
    done(null, user.id);
    //console.log("step 3 ::: SerializeUser ID ::: "+user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id).then((user) => {
        done(null, user);
        //console.log("step 4 ::: deSerializeUser ::: ID "+id);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID:CONFIG.googleAuth.clientID,
        clientSecret: CONFIG.googleAuth.clientSecret,
        callbackURL: CONFIG.googleAuth.callbackURL
    }, (token, refreshToken, profile, done) => {
        //console.log("profile details  step  ::: 1 ",profile.id);
        // process.nextTick(()=>{

        // });
        // check if user already exists in our own db
        User.findOne({ 'googleId' : profile.id },(err, user)=>{
            //console.log("step  ::: 2 ",currentUser);
            if (err)
                return done(err);
            if (user) {
                // if a user is found, log them in
                let token=jwt.sign({_id:user._id},CONFIG.SECRETKEY,{expiresIn:1800});
                console.log(token);
                return done(null, user);
            } else {
                console.log(profile);
                // if the user isnt in our database, create a new user
                var newUser = new User();
                // set all of the relevant information
                newUser.googleId = profile.id;
                newUser.username = profile.displayName;
                newUser.googleImage = profile.photos[0].value;
                newUser.googleToken = token;
                // save the user
                newUser.save(function(err) {
                    if (err) throw err;
                    return done(null, newUser);
                });
            }
        });
    })
);

module.exports.tokenValidation = (req,res,next)=>{
    let token = req.headers['jwt-token']
    console.log(req);
    
    console.log("token access",token);
    if(!token){
       let error={
           message:"Token not found",
           token:null
       }
       res.status(404).json(error);
    }else{
        jwt.verify(token,CONFIG.SECRETKEY,(tokenError,responce)=>{
            console.log("token generation",responce);
            if(tokenError)
            {
                let error={
                    message:"Internal Server Error",
                    token:null
                }
                res.status(500).json(error);
            }else{
                User.findById(responce._id,(err,users)=>{
                   if(err){
                    let error={
                        message:"Finding server error",
                        token:null
                    }
                    res.status(500).json(error); 
                   }else if(!users){
                    let error={
                        message:"Failed to authenticate User",
                        token:null
                    }
                   res.status(401).json(error);
                   }else{
                       next();
                   }
               })
            }
        })
    }
}