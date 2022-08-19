import './style.scss';
import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import data from './todos';

function App() {
  const [todos, setTodos] = useState(data);
  return (
    <div className="App">
      <TodoHeader>Todo List</TodoHeader>
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoInsert todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
