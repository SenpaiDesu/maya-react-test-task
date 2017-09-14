import React from 'react';

import TodoList from './components/todoList.component';
import AddTodo from './components/addTodo.component';

export default () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

