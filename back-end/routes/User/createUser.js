const User = require('../../models/user');

const tokenCheck = require('./token');

module.exports = (app) => {
  app.post('/users', tokenCheck, (req, res) => {
    delete req.body._id;
    const model = new User({
      ...req.body,
    });
    model
      .save()
      .then(() => res.status(201).json({ message: 'User added' }))
      .catch((error) => res.status(400).json({ error }));
  });
};
