'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// http get request  - trying to extract data
axios_1['default'].get(url).then(function (response) {
  console.log(response.data);
});

// node index.js - { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
