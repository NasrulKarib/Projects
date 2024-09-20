import React ,{useState}from 'react'
import Todos from './Todos';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


export default function NewTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleChange =(event) =>{
    const {name,value} = event.target;
    if(name === 'title') setTitle(value)
    else setDescription(value)
  }
  const handleSubmit  = async(event) =>{
    event.preventDefault();
    let newTodo = {
      id : uuidv4(),
      title: title,
      description : description,
      completed : false,
    }
    try {
      await axios.post('http://localhost:8000/api/tasks/', newTodo);
      setTitle(""); // Clear the title input field
      setDescription(""); // Clear the description input field
      props.onTodo(newTodo); // Update parent component with new todo
    } catch (error) {
      console.error('There was an error creating the todo!', error);
    }
  }
  return (
    <div className='border-b-slate-700 border-b-2'>
      <form className='flex flex-row items-center' onSubmit = {handleSubmit}>
        <div className='py-2 space-y-2 '>
            <p className='font-bold'> Title:</p>
            <input 
            className='w-52 p-1 rounded-sm text-black focus:outline-green-500 focus:outline-1' 
            type='text' 
            placeholder='What do you want to do?'
            name = 'title'
            value = {title}
            onChange = {handleChange}
            />
        </div>
        <div className='p-4 space-y-2'>
            <p className='font-bold'>Description:</p>
            <input 
            className='w-64 p-1 rounded-sm text-black focus:outline-green-500 focus:outline-1' 
            type='text' 
            placeholder='Would you elaborate, please?'
            name = 'description'
            value= {description}
            onChange = {handleChange}
            />
        </div>
        <div className='mt-8'>
          <button className='bg-green-400 text-white px-4 py-1 rounded-sm hover:bg-green-500'>Add</button>
        </div>
      </form>
    </div>
  )
}
