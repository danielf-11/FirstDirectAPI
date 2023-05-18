const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  cID: { type: String, required: true },
  uID: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  pin: { type: String, required: true },
  balance: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
