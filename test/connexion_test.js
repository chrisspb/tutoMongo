const mongoose = require('mongoose');

before((done) => {
    mongoose.connect('mongodb://localhost/books_test');

    mongoose.connection.once('open', () => {
        console.log('Connection established!');
        done();
    }).on('error', (error) => {
        console.warn('Error during connection: ', error);
    })
    
});

beforeEach('Delete old books', done => {
    const books = mongoose.connection.collections.books;
    // == const {books} = mongoose.connection.collections
    books.drop( () =>{
        done();
    })
})