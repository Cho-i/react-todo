import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todos, setTodos}) {
  return (
    <div className="list-box">
      <ul>
        {
          todos.map((todo, i) => (
            <TodoListItem todos={todos} setTodos={setTodos} todo={todo} key={i} i={i} />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
