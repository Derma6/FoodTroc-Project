const User = require('../../models/user');

module.exports = (app) => {
  app.get('/users', (req, res) => {
    if (req.query.uid) {
      User.find({ uid: req.query.uid }, (err, data) => {
        if (!err) res.json(data);
      });
    } else {
      User.find((err, data) => {
        if (!err) res.json(data);
      });
    }
  });
};
