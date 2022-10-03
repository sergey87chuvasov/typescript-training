import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// http get request  - trying to extract data
axios.get(url).then((response) => {
  console.log(response.data);
});

// tsc index.ts

// ts-node - compile 2 command in one
// ts-node index.ts - { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
