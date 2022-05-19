const User = require('../../models/user');
const tokenCheck = require('./token');

module.exports = (app) => {
  app.delete('/users/:uid', tokenCheck, (req, res, next) => {
    User.deleteOne({ uid: req.params.uid })
      .then(() => res.status(201).json({ message: 'User supprimé !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
