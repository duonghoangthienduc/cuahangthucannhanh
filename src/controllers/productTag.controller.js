const ProductTagModel = require('../models/product-tag.model');

exports.GetAll = (req, res)=>{
    ProductTagModel.getAllProductTag((err,product)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(product);
        }
    })
}
exports.GetByTag = (req, res)=>{
    ProductTagModel.getProductTag(parseInt(req.params.id) ,(err,product)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(product);
        }
    })
}