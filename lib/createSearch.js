'use strict';
const superagent = require('superagent');
const handleError = require('./handleError');
const Book = require('./Book');

function createSearch(request, response) {
  let url = 'https://www.googleapis.com/books/v1/volumes?q=';

  // Below we are Destructuring and assigning two variables at once
  // var [input, authorOrTitle] = request.body.search;

  var input = request.body.search[0];
  console.log('input: ', input);
  var authorOrTitle = request.body.search[1];
  console.log('authorOrTitle: ', authorOrTitle);

  if (request.body.search[1] === 'title') { url += `+intitle:${request.body.search[0]}`; }
  if (request.body.search[1] === 'author') { url += `+inauthor:${request.body.search[0]}`; }

  superagent.get(url)
    .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))
    .then(results => response.render('pages/searches/show', { results: results }))
    .catch(err => handleError(err, response));
}

module.exports = createSearch;
