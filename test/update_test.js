const assert = require('assert');
const Book = require('../src/book');

describe('Test update', () => {
    let book1;
    let newTitle = 'Game of thrones';
    beforeEach( (done) => {
        book1 = new Book({title: 'Moby Dick'});
        book1.save().then(() => {
            done();
        })
    });

    function assertTitle(promise, done) {
        promise.then(() => {
            Book.find({}).then( books => {
                assert(books[0].title === newTitle);
                done();
            })
        });
    }

    it('Update by instance', (done) => {
        book1.set('title', newTitle);
        assertTitle(book1.save(), done);
    });

    it('Update by Model', (done) => {
        assertTitle(Book.updateOne({title: 'Moby Dick'}, {title: newTitle}), done);
    });

});