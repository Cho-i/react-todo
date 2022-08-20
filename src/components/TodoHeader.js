import React from 'react';

function TodoHeader(props) {
  return (
    <header>
      <h1>{props.children}</h1>
      <div className="count">{props.todos.filter(todo => todo.checked).length} / {props.todos.length}개 완료!</div>
    </header>
  );
}

export default TodoHeader;
