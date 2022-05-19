const mongoose = require('mongoose');

module.exports = mongoose.model(
  'UserStock',
  new mongoose.Schema({
    uid: { type: String, required: true },
    username: { type: String, required: true },
    userlocation: { type: String, required: true },
    stock: [
        {
            productName: { type: String, required: true },
            quantity: { type: String, required: true },
            freshness: { type: String, required: true },
            description: { type: String, required: true }
        }
    ]
  })
);
