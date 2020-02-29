'use strict';

//being passed into elsewhere.ejs as data through the elsewhereHandler below
const numArr = ['one', 'two', 'three', 'four'];

//example route
function elsewhereHandler(request, response) {
  console.log('inside the elsewhere handler');
  response.render('pages/searches/elsewhere', { data: numArr });
} 

module.exports = elsewhereHandler;
