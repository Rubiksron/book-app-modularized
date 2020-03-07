'use strict';

const client = require('./client');
const handleError = require('./handleError');

function deleteBook(request, response) {
  let SQL = 'DELETE FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(response.redirect('/'))
    .then(() => console.log('book deleted!!'))
    .catch(err => handleError(err, response));
}

module.exports = deleteBook;

