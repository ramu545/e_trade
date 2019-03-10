const ProdModel = require("mongoose").model('Product');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const multer = require("multer");
var jwtDecode = require('jwt-decode');

module.exports.products = async (req, res, next) => {
    if(req.body){
        let token = req.headers['jwt-token'];
        var decoded = jwtDecode(token);
        User.findById(decoded._id,(err,userdata)=>{
            if(err){
                let error={
                    name:"Internal Server Error",
                    message:"Finding User Error"
                }
                res.status(500).json(error);
            }
            else{
                res.status(200).send(userdata);
            }
        })
    }
    else{
        let error={
            name:"Bad Request",
            message:"Required Fealds are missing"
        }
        res.status(400).json(error);
    }   
}

// disk storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage }).any('image');

module.exports.productupload = (req, resp, next) => {
    let token = req.headers['jwt-token'];
    var decoded = jwtDecode(token);
    if(req.body){
        User.findById(decoded._id,(err,res)=>{
            if(err){
                let error = {
                    name:"Internal Server Error",
                    message:"Finding User Not Found"
                }
                resp.status(500).json(error);
            }
            else{
                upload(req, res, (err) => {
                    if (err) {
                        resp.status(500).send(err);
                    } else {
                        console.log(req.file);
                        resp.status(200).send(req.file);
                    }
                })
            }
        })
    }
    else{
        let error = {
            name:"Bad Request",
            message:"required fields are missing",
        }
        res.status(400).json(error);
    }
}