const User = require('../../models/user');

module.exports = (app) => {
  app.delete('/users/:id', (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(201).json({ message: 'User supprimé !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
