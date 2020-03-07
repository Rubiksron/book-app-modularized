'use strict';

const client = require('./client');
const handleError = require('./handleError');
const getBookshelves = require('./getBookshelves');

function getBook(request, response) {
  getBookshelves()
    .then(shelves => {
      let SQL = 'SELECT * FROM books WHERE id=$1;';
      //request.params.id grabs value from the input by the 'name' attribute. Again, the name attribute is required for request.params.id
      let values = [request.params.id];
      client.query(SQL, values)
        .then(result => response.render('pages/books/show', { book: result.rows[0], bookshelves: shelves.rows }))
        .then(() => console.log('Got One Book!!!'))
        .catch(err => handleError(err, response));
    });
}

module.exports = getBook;
