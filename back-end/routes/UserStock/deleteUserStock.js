const UserStock = require('../../models/userStock');

module.exports = (app) => {
  app.delete('/userStocks/:id', (req, res, next) => {
    UserStock.deleteOne({ _id: req.params.id })
      .then(() => res.status(201).json({ message: 'UserStock supprimé !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
