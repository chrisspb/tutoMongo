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

beforeEach('Delete old data', done => {
    /*const books = mongoose.connection.collections.books,
        users = mongoose.connection.collections.users;

    // == const {books, users} = mongoose.connection.collections
    books.drop( () =>{
        users.drop( () => {
            done();
        })
    })*/
    mongoose.connection.db.dropDatabase().then( () => {
        done();
    })
})