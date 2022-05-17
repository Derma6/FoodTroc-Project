const User = require('../../models/user')

module.exports = (app) => {
    app.put('/users/:id', (req, res, next) => {
        User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(201).json({ message: 'User modifié !'}))
          .catch(error => res.status(400).json({ error }));
    });
}