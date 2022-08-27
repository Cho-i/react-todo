import { useState } from 'react';
import React, { useRef } from 'react';
import moment from 'moment';
import 'moment/locale/ko';

function TodoInsert({todos, setTodos}) {
  const [value, setValue] = useState('');
  const nextId = useRef(4);
  return (
    <div className="input-box">
      <input type="text" placeholder="할 일을 입력하세요." value={value} onChange={(e)=>{
        setValue(e.target.value)
      }} />
      <button onClick={(e)=>{
        const nowDate = moment().format('YYYY-MM-DD');

        const todo = {
          id: nextId.current ++,
          text: value,
          date: nowDate,
          checked: false,
        }

        const copy = [...todos]
        copy.push(todo)

        function add(){
          setTodos(copy)
          setValue('')
        }

        value !== '' ? add() : alert('내용을 입력해 주세요!')

      }}>추가</button>
      
    </div>
  );
}

export default TodoInsert;
