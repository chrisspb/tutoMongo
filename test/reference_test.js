const assert = require('assert');
const User = require('../src/users');
const BlogBook = require('../src/blogBooks');
const Comment = require('../src/comments');


describe('Test reference', () => {
    let user, blogBook, comment;

    beforeEach((done) => {
        user = new User( {name: 'Test'} );
        blogBook = new BlogBook( {title: 'Les fourmis', summary: 'Las fourmisas'});
        comment = new Comment( {content: 'Contennnt'} );

        user.blogBooks.push(blogBook);
        blogBook.comments.push(comment);
        // pas besoin de passer l'id -- mongo comprend qu'il faut aller chercher l'id
        comment.user = user;

        // exécute un ensemble de promesses
        Promise.all([user.save(), blogBook.save(), comment.save()]).then(() => {
            done();
        })
    });

    it('Test title book of user', (done) => {
        User.findOne( {name: 'Test'} ).populate('blogBooks').then((user) => {
            assert(user.blogBooks[0].title === 'Les fourmis');
            done();
        });
    });

    it('Test find a user comment', (done) => {
        User.findOne( {name: 'Test'} ).populate({
            path: 'blogBooks',
            populate: {
                path: 'comments',
                model: 'comment'
            }
        }).then((user) => {
            //console.log(user.blogBooks[0].comments[0])
            assert( user.blogBooks[0].comments[0].content === 'Contennnt' );
            done();
        });
    });

});