const User = require('../../models/user');

const tokenCheck = require('./token');
const getCoordinates = require('../../utilities/getCoordinates');

module.exports = (app) => {
  app.post('/users', tokenCheck, getCoordinates, (req, res) => {
    delete req.body._id;
    const model = new User({
      ...req.body,
    });
    model
      .save()
      .then(() =>
        res.status(201).json({ message: 'User added', data: req.body })
      )
      .catch((error) => res.status(400).json({ error }));
  });
};
