const Product = require('../../models/product')

module.exports = (app) => {
    app.post('/products', (req, res) => {
        delete req.body._id;
        const model = new Product({
            ...req.body
        })
        model.save()
        .then(() => res.status(201).json({ message: 'Product added'}))
        .catch(error => res.status(400).json({ error }));
    });
}