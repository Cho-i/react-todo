import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props) {
  return (
    <div className="list-box">
      <ul>
        {
          props.todos.map((todo, i) => (
            <TodoListItem todos={props.todos} setTodos={props.setTodos} todo={todo} key={i} i={i} />
          ))
        }
      </ul>
    </div>
  );
}

export default TodoList;
