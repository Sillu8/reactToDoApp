import React, { useState } from 'react';
import './App.css';
import CompletedTodos from './Components/CompletedTodos';
import Header from './Components/Header';
import Todos from './Components/Todos';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  

  return (
    <div className="app">
      <Header/>
      
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, isDone: false }])} className="fas fa-plus"></i>
      </div>
      
      <Todos toDos={toDos} setTodos={setTodos}/>
      
      <CompletedTodos toDos={toDos} setTodos={setTodos}/>

    </div>
  );
}

export default App;