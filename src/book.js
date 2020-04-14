const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    // middleware : opération qui vient s'intercaler avant le save => required[boolean + message d'erreur]
    title: {
        type: String, 
        required: [true, 'Title is required!'],
    },
    totalPages: {
        type: Number, 
        default: 0, 
        validate: {
            validator: totalPages => totalPages < 3000,
            message: 'Maximum pages is 3000'
        }}
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book; 