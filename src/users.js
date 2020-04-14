const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = require('./book').schema;

const UserSchema = new Schema({
    name: String,
    books: [BookSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User; 