import { useState } from 'react';
import React, { useRef } from 'react';

function TodoInsert(props) {
  const [value, setValue] = useState('');
  const nextId = useRef(4);
  return (
    <div className="input-box">
      <input type="text" placeholder="할 일을 입력하세요." value={value} onChange={(e)=>{
        setValue(e.target.value)
      }} />
      <button onClick={(e)=>{
        const today = new Date()
        const year = today.getFullYear()
        const month = ('0' + (today.getMonth() + 1)).slice(-2)
        const day = ('0' + today.getDate()).slice(-2)
        const dateString = year + '-' + month  + '-' + day

        const todo = {
          id: nextId.current ++,
          text: value,
          date: dateString,
          checked: false,
        }

        const copy = [...props.todos]
        copy.push(todo)

        function add(){
          props.setTodos(copy)
          setValue('')
        }

        value !== '' ? add() : alert('내용을 입력해 주세요!')

      }}>추가</button>
      
    </div>
  );
}

export default TodoInsert;
