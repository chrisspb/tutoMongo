const assert = require('assert');
const Book = require('../src/book');

describe('Test validation', () => {

    it('Title is required', (done) => {
        const book = new Book({title: undefined});
        const res = book.validateSync();
        const message = res.errors.title.message;
        assert(message === 'Title is required!');
        done();
    });

    it('Book has less than 3000 pages', (done) => {
        const book = new Book({title: 'test', totalPages: 3001});
        book.validate( res => {
            const message = res.errors.totalPages.message;
            assert(message === 'Maximum pages is 3000');
            done();
        });
    });

});