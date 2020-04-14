const assert = require('assert');
const User = require('../src/users');

describe('Test virtual type', () => {

    it('Test countbooks', (done) => {
        const user1 = new User({
            name: 'Test name',
            books: [
                {title: 'LOTR'},
                {title: 'LOTR 2'}
            ]
        });
        user1.save().then( () => {
            User.findOne({name: 'Test name'}).then( (usr) => {
                assert(usr.countBooks === 2);
                done();
            })
        });
    });



});