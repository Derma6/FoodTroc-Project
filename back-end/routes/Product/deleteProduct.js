const Product = require('../../models/product');

module.exports = (app) => {
  app.delete('/products/:id', (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(201).json({ message: 'Product supprimé !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
