const product = require('./product.router');
const tag = require('./tag.router');
const productTag = require('./tag-product.router')   

function routes(app){
    app.use('/product',product);
    app.use('/tag',tag);
    app.use('/tag-product',productTag)
}

module.exports = routes;
