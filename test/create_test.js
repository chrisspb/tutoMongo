const assert = require('assert');
const Book = require('../src/book');

describe('Création de livre', () => {
    it('Sauvegarde d un livre', (done) => {
        const book1 = new Book({title:'Harry Potter', totalPages: 0});
        book1.save().then(() => {
            assert(!book1.isNew);
            done();
        });
    })
});