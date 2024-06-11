const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('Customer', customerSchema);
