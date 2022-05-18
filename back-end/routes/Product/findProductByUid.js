const Product = require('../../models/product')

module.exports = (app) => {
    app.get('/products/:uid', (req, res) => {
        
        Product.findOne({uid : req.params.uid}, (err, document) => {
            if(!err )res.json(document)
        });
    });
}