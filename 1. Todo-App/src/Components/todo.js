import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './todo.module.css'

const Todo = (props) => {
  //console.log(props.todo);
  const { id,todo } = props.todo; // props.todo = {id:"", todo: {title: "", desp : ""}}
  const {title,desp}= todo; // todo: {title: "", desp : ""}
  const handleAction =(id) =>{
     props.onRemove(id); // finally, the id is found and passed to its parent todos
  }
  return (
    <article className={style.todo}>
    <div>
      <h3>{title}</h3>
      <p>{desp}</p>
    </div>
    <div>
      <button className={style.button} onClick = {() => handleAction(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  </article>
  )
}


export default Todo
