import React from 'react';

function TodoListItem(props) {
  return (
    <li>
      <input type="checkbox" id={props.todo.id}/>
      <label htmlFor={props.todo.id}>{props.todo.text}</label>
      <p>{props.todo.date}</p>
      <button onClick={(e)=>{
        let copy = [...props.todos]
        copy.splice(props.i,1)
        props.setTodos(copy)
      }}>삭제</button>
    </li>
  );
}

export default TodoListItem;
