const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CONFIG =require('../models/config');

module.exports.register = async (req,res,next)=>{
    if(req.body && req.body.name && req.body.password && req.body.email && req.body.phone){
        let salt = bcrypt.genSaltSync(10);
        let hashpassword = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:hashpassword
        });
        await User.findOne({email:req.body.email},(err, docs)=>{
            if(err){
                let error= {
                    name:"Internal Server Error",
                    message:"finding user Faild"
                }
                res.status(500).send(error);
            }
            else{
                if(docs){
                    let result= {
                        name:"User Allready Exist",
                        message:"Create New Account",
                        status:true
                    }
                    res.status(200).send(result);
                }
                else{
                    user.save((err,user)=>{
                        if(err){
                            let error= {
                                name:"Internal Server Error",
                                message:"Registration Faild"
                            }
                            res.status(500).send(error);
                        }
                        else{
                            let jwttoken = jwt.sign({data:user}, CONFIG.signature, { expiresIn: '1h' });
                            let data = {
                                status:true,
                                token:jwttoken
                            }
                        res.status(200).send(data);
                        }
                    });
                }
            }
        });
    }
    else{
        let error = {
            name :"BAD Request",
            message:"required Field are missing",
        }
        res.status(400).send(error);
    } 
}

module.exports.loginuser =async (req,res,next)=>{
    if(req.body && req.body.email && req.body.password){
        await User.findOne({email:req.body.email},(err, user)=>{
            if(err){
                let error = {
                    name :"Internal Server error",
                    message:"Searching User Faild",
                }
                res.status(500).send(error);
            }
            else{
                if(!user){
                    let error = {
                        name :"User NotFound",
                        message:"User Seraching Faild ..! Register As New User",
                    }
                    res.status(404).send(error);
                }
                else{
                    let bcryptpassword = bcrypt.compareSync(req.body.password, user.password); // true
                    if(!bcryptpassword){
                        let error = {
                            name :"Un Authorized",
                            message:"Password Not Matched",
                        }
                        res.status(401).send(error);
                    }
                    else{
                        let jwttoken = jwt.sign({data:user}, CONFIG.signature, { expiresIn: '1h' });
                        let data = {
                            status:true,
                            token:jwttoken
                        }
                        res.status(200).send(data);
                        console.log(data);
                    }
                }
            }
        })
    }
    else{
        let error = {
            name :"Bad Request",
            message:"required Field are missing",
        }
        res.status(400).send(error);
    }
}

module.exports.authentication = (req,res,next)=>{
    let token = req.headers['jwt-token'];
    if(!token){
        let error = {
            name :"Token Not Found",
            message:"Token Not Avilable",
        }
        res.status(404).send(error);
    }else{
        jwt.verify(token,CONFIG.signature,(err,sucess)=>{
            if(err){
                res.status(401).send(err.message)
            }
            else if(!sucess){
                let error = {
                    name :"Un Authorized",
                    message:"Token Not valid",
                }
                res.status(401).send(error);
            }
            else{
                next();
                //res.status(200).send(sucess);
            }
        }); 
    }
}

module.exports.profile = async (req,res,next)=>{
    if(req.params && req.params.id){
        await User.findById(req.params.id,(err,result)=>{
            if (err){
                let error ={
                    name:"Internal server error",
                    message:"Find Use profile fails"
                }
                res.status(500).send(error);
            }
            else{
                let data= {
                    name:result.name,
                    email:result.email,
                    active:true
                }
                res.status(200).send(data);
            }
          });
    }
    else{
        let error = {
            name :"Bad Request",
            message:"required Field are missing",
        }
        res.status(400).send(error);
    }
}

module.exports.updateUser = async (req,res,next)=>{
    if(req.params){
        let conditions = {_id:mongoose.Types.ObjectId(req.params.id)};
        let update= { $set:{name:req.params.name } };
        await User.findOneAndUpdate(conditions, update,(err,docs)=>{
            if(err){
                let error ={
                    name:"Internal server error",
                    message:"Find Use profile fails"
                }
                res.status(500).send(error);
            }
            else{
                res.status(200).send(docs);
            }
        });
    }
    else{
        let error = {
            name :"BAD Request",
            message:"required Field are missing",
        }
        res.status(400).send(error);
    }
}

module.exports.deleteUser = async (req,res,next)=>{
    if(req.params && req.params.id){
        const query = ({_id:req.params.id}).deletedCount;
        await User.deleteOne(query,(err,user)=>{
            if(err){
                let error = {
                    name:"Internal server error",
                    message:"User deletion Faild"
                }
                res.status(500).send(error);
            }
            else{
                let data ={
                    deletedCount : user.deletedCount,
                    detetedStatus:user.ok
                }
                res.status(200).send(data);
            }
        });
    }
    else{
        let error = {
            name :"Bad Request",
            message:"required Field are missing",
        }
        res.status(400).send(error);
    }
}