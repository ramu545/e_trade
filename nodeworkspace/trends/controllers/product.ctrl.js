const ProdModel = require("mongoose").model('Product');
const multer = require("multer");
var jwtDecode = require('jwt-decode');

module.exports.products = async (req, res, next) => {
    //node mailer
    let token = req.headers['jwt-token'];
    var decoded = jwtDecode(token);
    //res.status(200).send(decoded);   
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
const upload = multer({ storage: storage }).array('image', 2);

module.exports.productupload = (req, res, next) => {
    let token = req.headers['jwt-token'];
    var decoded = jwtDecode(token);
    if(req.body){
        User.findById(decoded._id,(err,res)=>{
            if(err){
                let error = {
                    name:"Internal Server Error",
                    message:"Finding User Not Found"
                }
                res.status(500).json(error);
            }
            else{
                console.log(res);
                upload(req, res, (err) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        //console.log(req.body);
                        res.status(200).send(req.files);
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