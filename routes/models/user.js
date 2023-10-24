const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    verified: Boolean
});

module.exports = mongoose.model('User', userSchema);
