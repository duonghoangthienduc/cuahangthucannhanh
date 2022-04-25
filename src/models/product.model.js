const db = require('../configs/db');

class Product {
    constructor(product) {
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.image = product.image;
    }
    static getAll(result) {
        db.query('select * from product', (err, rows) => {
            if (err) throw err;
            result(rows);
        });
    }
    static getById(id, result) {
        db.query('select * from product where productId = ?', id, (err, rows) => {
            if (err) throw err;
            console.log('Data found');
            result(rows);
        });
    }
    static addProd(productData, result) {
        db.query('insert into product(productName, price, image) values(?, ?, ?)',
            [productData.name, productData.price, productData.image], (err, rows) => {
                if (err) throw err;
                else{
                    console.log('Data has been update');
                    result(null, rows);
                }   
            });
    }
    static updateProd(id, productData, result) {
        db.query('update product set productName = ?, price = ?, image = ? where productId = ?',
            [productData.name, productData.price, productData.image, id], (err, rows) => {
                if (err) throw err;
                else{
                    console.log('Data has been replace');
                    result(null, rows);
                }     
            });
    }
}

module.exports = Product;