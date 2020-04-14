const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = require('./book').schema;
const BlogBook = require('./blogBooks');

const UserSchema = new Schema({
    name: String,
    books: [BookSchema],
    blogBooks: [{
        type: Schema.Types.ObjectId,
        ref: 'blogBook'
    }]
});

// Création d'un type virtuel
UserSchema.virtual('countBooks').get(function() {
    return this.books.length;
});

//ajout d'un middleware
// tu vas dans this.blogbooks, tu trouves tous les id dedans et tu les removes
UserSchema.pre('remove', function(next) {
    BlogBook.remove({ _id: {$in: this.blogBooks}}).then(() => {
        next();
    })
})

const User = mongoose.model('user', UserSchema);

module.exports = User; 