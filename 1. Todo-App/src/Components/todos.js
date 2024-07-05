import React from 'react'
import Todo from './todo'
import style from './todos.module.css'

const Todos = (props) => {
  return (
    <section className = {style.todos}>
      {
        props.todos.map((todo,key) =>(
            <Todo id={key} todo = {todo} onRemove = {props.onRemove}/> 
            /* id values will be like 0,1,..; 
               todo is like todo : {title: "", desp: ""}
               props.onRemove is from parent home to get the id of deleted one
            */
        ))
      }
    </section>
  )
}

export default Todos;
