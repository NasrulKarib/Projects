import React ,{useState}from 'react'
import style from './newtodo.module.css'

const Newtodo = (props) => {
  const [todo, setTodo]= useState({title : "", desp : "" }); // todo is declared
  const {title, desp} = todo;
  const handleChange = (event) =>{
    const fieldName = event.target.name;
    setTodo((oldTodo) => // this type is followed to update according to the old values of todo
    {
      return {
        ...oldTodo, [fieldName]: event.target.value
      };
    }
    );
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onTodo(todo); // pass todo to its parent home
  }
  return (
    <form className={style.form} onSubmit ={handleSubmit}> 
        <div className={style['form-field']}>
            <label htmlFor='title' className={style.titleT}>Title : </label>
            <input 
            type='text' 
            id='title' 
            name='title' 
            value = {title}
            onChange={handleChange}/>
        </div>
        <div className={style['form-field']}>
            <label htmlFor='desp' className={style.despT}> Details : </label>
            <textarea 
            type='text'
            id='desp' 
            name='desp' 
            value = {desp}
            onChange={handleChange}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default Newtodo;
