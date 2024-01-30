const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  userRole: {
    type: String,
    default: 'User',
    roles: ['User', 'Admin'],
  },
});

module.exports = mongoose.model('User', userSchema);
