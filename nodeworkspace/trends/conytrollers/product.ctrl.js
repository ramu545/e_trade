const ProdModel = require("mongoose").model('Product');
const multer = require("multer");

module.exports.products = async (req,res,next)=>{
    
}

const storage = multer.diskStorage({
    destination:(req, file, callback)=> {
      callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage : storage }).array('image',2);

module.exports.productupload = (req,res,next)=>{
    if(req.body){
        upload(req,res, (err)=>{
            if(err){
                res.status(500).send(err);
            }else{
                //console.log(req.body);
                res.status(200).send(req.files);
            }
        })
    }
    else{
        let error={
            name:"not authorized",
            message:"Please Login ",
            Status:false
        }
        res.status(401).json(error);
    }
}