const mongoose = require('mongoose');
const assert = require('assert');
const Book = require('../src/book');

describe('Test read', () => {
    let book1;

    beforeEach( (done) => {
        book1 = new Book({title: 'Harry Potter', totalPages: 0});
        book1.save().then(() => {
            done();
        })
    });

    it('Research by title', (done) => {
        Book.find({title: 'Harry Potter'}).then((book) => {
            assert(book[0]._id.equals(book1._id));
            done();
        });
    });

    it('Research by _id', (done) => {
        Book.findOne({_id: book1._id}).then((book) => {
            assert(book.title === book1.title);
            done();
        });
    });


});