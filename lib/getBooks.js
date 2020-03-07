'use strict';

const handleError = require('./client');
const client = require('./client');

function getBooks(request, response) {
  let SQL = 'SELECT * FROM books;';

  return client.query(SQL)
    .then(results => {
      console.log('got all books!')
      // console.log('DB results.rows: ', results.rows)
      if (results.rows.rowCount === 0) {
        response.render('pages/searches/new');
      } else {
        response.render('pages/index', { books: results.rows });
      }
    })
    .catch(err => handleError(err, response));
}

module.exports = getBooks;
