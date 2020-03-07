'use strict';

const client = require('./client');

function getBookshelves() {
  let SQL = 'SELECT DISTINCT bookshelf FROM books ORDER BY bookshelf;';

  return client.query(SQL);
}

module.exports = getBookshelves;
