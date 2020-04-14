const assert = require('assert');
const Book = require('../src/book');

describe('Test delete', () => {
    let book1;
    beforeEach( (done) => {
        book1 = new Book({title: 'Moby Dick', totalPages: 0});
        book1.save().then(() => {
            done();
        })
    });

    function assertDelete(promise, done) {
        promise.then(() => {
            Book.findOne({title: 'Moby Dick'}).then( books => {
                assert(books === null);
                done();
            })
        });
    }

    it('Remove by instance', (done) => {
        assertDelete(book1.remove(), done);
    });

    it('Remove by Model', (done) => {
        assertDelete(Book.remove({title: 'Moby Dick'}), done);
        // existe findOneAndRemove({title: 'Moby Dick'}) et findByIdAndRemove
    });

});