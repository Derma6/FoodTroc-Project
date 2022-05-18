const Product = require('../../models/product')

module.exports = (app) => {
    app.put('/products/:id', (req, res, next) => {
        Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(201).json({ message: 'Product modifié !'}))
          .catch(error => res.status(400).json({ error }));
    });
}