const productModel = require('../models/product.model');

exports.GetAllProduct = (req, res)=>{
    productModel.getAll((err, products)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(products);
        }
    })   
}

exports.GetProduct = (req, res)=>{
    productModel.getById(parseInt(req.params.id) ,(err, product)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(product);
        }
    })
}

exports.AddProduct = (req, res)=>{
    try {
        const productData = new productModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ==0)
            throw new Error("Please fill data");
    else{
        productModel.addProd(productData, (err, product)=>{
            if(err) throw err;
            else{
                return res.status(200).send({message:'Add success'});
            }
        })
    }
    } catch (error) {
        res.status(400).send({error: error.message});
    }  
}
exports.UpdateProduct = (req, res)=>{
    try {
        const productData = new productModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ==0)
            throw new Error("Please fill data");
    else{
        productModel.updateProd(req.params.id,productData, (err, product)=>{
            if(err) throw err;
            else{
                return res.status(200).send({message:'Updated data success'});
            }
        })
    }
    } catch (error) {
        return res.status(400).send({error: error.message});
    }  

    
}