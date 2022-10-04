import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// http get request  - trying to extract data
axios.get(url).then((response) => {
  // response.data has properties of: id title completed
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};

// tsc index.ts

// ts-node - compile 2 command in one
// ts-node index.ts - { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
