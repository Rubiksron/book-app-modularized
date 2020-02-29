'use strict';

const client = require('./client');
const handleError =require('./handleError');

function createBook(request, response) {
  // let normalizedShelf = request.body.bookshelf.toLowerCase();
  let normalizedShelf = '';

  let { title, author, isbn, image_url, description } = request.body;
  let SQL = 'INSERT INTO books(title, author, isbn, image_url, description, bookshelf) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;';
  let values = [title, author, isbn, image_url, description, normalizedShelf];

  client.query(SQL, values)
    .then(result => response.redirect(`/books/get/${result.rows[0].id}`))
    .catch(err => handleError(err, response));
}

module.exports = createBook;