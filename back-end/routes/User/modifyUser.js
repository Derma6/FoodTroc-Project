const User = require('../../models/user');
const tokenCheck = require('./token');

module.exports = (app) => {
  app.put('/users/:uid', tokenCheck, (req, res, next) => {
    console.log(req.body);
    User.updateOne({ uid: req.params.uid }, { ...req.body })
      .then(() => res.status(201).json({ message: 'User modifié !' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
