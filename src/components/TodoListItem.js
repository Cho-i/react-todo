import React from 'react';

function TodoListItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.todo.checked} id={props.todo.id} onChange={(e)=>{
        const copy = [...props.todos]
        copy[props.i].checked = e.target.checked
        props.setTodos(copy)
      }}/>
      <label htmlFor={props.todo.id}>{props.todo.text}</label>
      <p>{props.todo.date}</p>
      <button onClick={(e)=>{
        const copy = [...props.todos]
        copy.splice(props.i,1)
        props.setTodos(copy)     
      }}>삭제</button>  
    </li>
  );
}

export default TodoListItem;
