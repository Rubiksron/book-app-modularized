'use strict';

const client = require('./client');
const handleError = require('./handleError');

function updateBook(request, response) {
  let { title, author, isbn, image_url, description, bookshelf } = request.body;

  let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5, bookshelf=$6 WHERE id=$7;`;
  //params are passed through the name attribute and accessed on the request object
  let values = [title, author, isbn, image_url, description, bookshelf, request.params.id];

  client.query(SQL, values)
    .then(response.redirect(`/books/get/${request.params.id}`))
    .catch(err => handleError(err, response));
}

module.exports = updateBook;
