const assert = require('assert');
const User = require('../src/users');
const BlogBook = require('../src/blogBooks');
const Comment = require('../src/comments');


describe('Test middleware', () => {

    it('Test books are deleted if user is deleted', (done) => {
        user = new User( {name: 'Test'} );
        blogBook = new BlogBook( {title: 'Les fourmis', summary: 'Las fourmisas'});
        comment = new Comment( {content: 'Contennnt'} );

        user.blogBooks.push(blogBook);
        blogBook.comments.push(comment);
        // pas besoin de passer l'id -- mongo comprend qu'il faut aller chercher l'id
        comment.user = user;

        // exécute un ensemble de promesses
        Promise.all([user.save(), blogBook.save(), comment.save()]).then(() => {
            user.remove().then(() => {
                BlogBook.count().then((count) => {
                    assert(count === 0);
                    done();
                })
            })
        })

    });


});