import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]); 
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then(response => response.json())
  .then(json => setTodos(JSON.parse(JSON.stringify(json))))
  }, []);


  return (
      <>
      <div className='input'>
      <input type="text" placeholder='Search...' onChange={e => (setSearch(e.target.value))} />
      </div>
      <div className='container'>
      <ul className='id'>{todos.filter((todo) => {
        if(search === "") {
          return todo
        } else if (todo.title.toLowerCase().includes(search.toLowerCase()) || todo.id === parseInt(search)){
          return todo
        }
      })
      .map((todo) => {
        return(
        <li>{todo.userId}
        <li className='title'>
            {todo.title}
        </li>
        <li className='sort'>
            {todo.id}
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