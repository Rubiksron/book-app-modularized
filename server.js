'use strict';

require('dotenv').config();

// Application Dependencies
const express = require('express');
const methodOverride = require('method-override');

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Database Setup
const client = require('./lib/client');

// Application Middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// Static Routes
app.use(express.static('public'));

// Modular Functions
const getBooks = require('./lib/getBooks');
const newSearch = require('./lib/newSearch');
const createSearch = require('./lib/createSearch');
const handleError = require('./lib/handleError');
const getBook = require('./lib/getBook');
const createBook = require('./lib/createBook');
const updateBook = require('./lib/updateBook');
const deleteBook = require('./lib/deleteBook');

// API Routes
app.get('/', (request, response) => {
  getBooks(request, response);
});
app.post('/searches', (request, response) => {
  createSearch(request, response);
});
app.get('/searches/new', (request, response) => {
  newSearch(request, response);
});
app.get('/books/get/:id', (request, response) => {
  getBook(request, response);
});
app.post('/books', (request, response) => {
  createBook(request, response);
});
app.put('/books/:id', (request, response) => {
  updateBook(request, response);
});
app.delete('/books/:id', (request, response) => {
  deleteBook(request, response);
});
app.get('/elsewhere', elsewhereHandler);

// Failsafe Routes
app.get('*', (request, response) => response.status(404).send('This route does not exist'));
app.get((error, req, res) => handleError(error, res)); // handle errors


//being passed into elsewhere.ejs as data through the elsewhereHandler below
const numArr = ['one', 'two', 'three', 'four'];

//example route
function elsewhereHandler(request, response) {
  console.log('inside the elsewhere handler');
  response.render('pages/searches/elsewhere', { data: numArr });
} 


client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Lab-13 solution is listening on port: ${PORT}`));
  });
