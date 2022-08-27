import React from 'react';

function TodoHeader({todos, children}) {
  return (
    <header>
      <h1>{children}</h1>
      <div className="count">{todos.filter(todo => todo.checked).length} / {todos.length}개 완료!</div>
    </header>
  );
}

export default TodoHeader;
