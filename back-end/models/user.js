const mongoose = require('mongoose');

module.exports = mongoose.model(
  'User',
  new mongoose.Schema({
    uid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
  })
);
