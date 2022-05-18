const Product = require('../../models/product');

module.exports = (app) => {
  app.get('/products', (req, res) => {
    if (req.query.uid) {
      Product.find({ uid: req.query.uid }, (err, data) => {
        if (!err) res.json(data);
      });
    } else {
      Product.find((err, data) => {
        if (!err) res.json(data);
      });
    }
  });
};
