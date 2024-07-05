import React, {useState} from 'react';
import Todos from './todos'
import Newtodos from './newtodo'
import style from './home.module.css'
import {v4 as uuidv4} from 'uuid';


const Home = () => {
  const [todos, setTodos] = useState([]); // declare an array which includes objects
  const handleNewTodo = (todo) =>{
    setTodos((prevTodos) =>{
      return [...prevTodos, {id: uuidv4(), todo}] // array will be like : {id:'', todo:{title:" ", desp: " "}}
    });
  }
  const handleRemoveTodo =(id) => // id is passed from child todo-> child todos -> parent home
  {
    setTodos((prevTodos) => {
      const filteredTodo = prevTodos.filter((todo) => todo.id !== id); // only selected id is deleted
      return filteredTodo;
    });
  }
  return (
    <div className={style.container}>
        <h1 style={{color:'white', fontFamily:'Roboto'}}>Todo App</h1>
        <Newtodos onTodo={handleNewTodo} />
        <Todos todos = {todos} onRemove = {handleRemoveTodo}/>
    </div>
  )
}

export default Home;
