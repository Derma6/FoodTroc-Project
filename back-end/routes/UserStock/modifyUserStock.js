const UserStock = require('../../models/userStock')

module.exports = (app) => {
    app.put('/userStocks/:id', (req, res, next) => {
        UserStock.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(201).json({ message: 'UserStock modifié !'}))
          .catch(error => res.status(400).json({ error }));
    });
}