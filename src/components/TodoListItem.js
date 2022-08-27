import React from 'react';

function TodoListItem({todos, setTodos, todo, i}) {
  return (
    <li>
      <input type="checkbox" checked={todo.checked} id={todo.id} onChange={(e)=>{
        const copy = [...todos]
        copy[i].checked = e.target.checked
        setTodos(copy)
      }}/>
      <label htmlFor={todo.id}>{todo.text}</label>
      <p>{todo.date}</p>
      <button onClick={(e)=>{
        const copy = [...todos]
        copy.splice(i,1)
        setTodos(copy)     
      }}>삭제</button>  
    </li>
  );
}

export default TodoListItem;
