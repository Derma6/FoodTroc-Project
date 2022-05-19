const UserStock = require('../../models/userStock');

module.exports = (app) => {
  app.get('/userStocks', (req, res) => {
    if (req.query.uid) {
      UserStock.find({ uid: req.query.uid }, (err, data) => {
        if (!err) res.json(data);
      });
    } else {
      UserStock.find((err, data) => {
        if (!err) res.json(data);
      });
    }
  });
};
