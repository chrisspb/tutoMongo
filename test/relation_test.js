const assert = require('assert');
const User = require('../src/users');

describe('Test de relation', () => {

    it('Test de la taille de la liste de livres d un utilisateur', (done) => {
        let user1 = new User({
            name: 'Nom'
        });

        user1.books.push({title: 'Lord of the rings'});

        user1.save().then( () => {
            User.findOne({name: 'Nom'}).then( (user) => {
                assert(user.books.length === 1);
                done();
            });
        })
    });


});