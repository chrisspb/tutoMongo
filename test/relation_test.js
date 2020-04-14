const assert = require('assert');
const User = require('../src/users');

describe('Test de relation', () => {

    it('Test de la taille de la liste de livres d un utilisateur', (done) => {
        let user1 = new User({
            name: 'Nom', 
            books: [{title: 'Lord of the rings'}, {title: 'Lord of the rings 2'}]
        });

        user1.save().then( () => {
            User.findOne({name: 'Nom'}).then( (user) => {
                assert(user.books.length === 2);
                done();
            });
        })
    });


});