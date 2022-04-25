const db = require('../configs/db');

class productTag{
    constructor(ProductTag){
        this.productId = ProductTag.productId;
        this.tagId = ProductTag.tagId;
    }
    static getAllProductTag(result){
        db.query('SELECT pr.productName, pr.price, tg.tagName FROM product pr, product_tag prtg, tag tg WHERE pr.productId = prtg.productId && tg.tagId = prtg.tagId',
        (err, rows)=>{
            if(err) throw err;
            console.log('Found data');
            result(rows);
        })
    }
    static getProductTag(id,result){
        db.query('SELECT pr.productName, pr.price, tg.tagName'+
        ' FROM product pr, product_tag prtg, tag tg'+
        ' WHERE pr.productId = prtg.productId && tg.tagId = prtg.tagId && tg.tagId = ?',id,
        (err, rows)=>{
            if(err) throw err;
            console.log('Found data');
            result(rows);
        })
    }
}

module.exports = productTag;