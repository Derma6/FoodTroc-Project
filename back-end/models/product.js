const mongoose = require('mongoose');

module.exports = mongoose.model(
    'Product',
    new mongoose.Schema({
      id: { type: String, required: true },
      name: { type: String, required: true },
      url: { type: String, required: true },
    })
  );