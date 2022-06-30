import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]); 
  const [number, setNumber] = useState(1);

  useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${number}`)
  .then(response => response.json())
  .then(json => setTodos(JSON.parse(JSON.stringify(json))))
  }, [number]);


  return (
      <>
      <div className='input'>
      <input type="number" onChange={e => (setNumber(e.target.value))} />
      </div>
      <div className='container'>
      <ul className='id'>{todos.map((todo) => {
        return(
        <li>{todo.userId}
        <li className='title'>
          {todo.title}
        </li>
        </li>
        )
      })}
      </ul>
      </div>
      </>  
  );
}

export default App;