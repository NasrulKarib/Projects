import React ,{useState}from 'react'
import axios from 'axios';
import { SlTrash } from "react-icons/sl";
import { FcCheckmark } from "react-icons/fc";

export default function Todos({todos, onDeleteTodo, onComplete}) {
  const [isColor, setColor] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const handleComplete = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/api/tasks/${id}/`, { completed: true });
      onComplete(id);
    } catch (error) {
      console.error('Error marking todo as completed', error);
    }
  };
  
  
  const filteredTodo = todos.filter(todo => isColor ? !todo.completed : todo.completed);
  
  return (
    <div className='py-6 space-y-8'>
        <div className=' text-white w-fit h-4   '>
            <button 
              onClick={()=>{setColor(true)}}
              className={`todoClass ${isColor === true && 'active' }`} >
              To Do</button>
            <button 
              onClick={()=>{setColor(false)}}
              className={`todoClass ${isColor === false && 'active' }`}>
            Completed</button>
        </div>

        {
          filteredTodo.map((todo, index)=>{
            const {id,title, description} = todo;
            return (
              <div key={index} className='shadow-lg '>
                    <section className='bg-gray-700 p-4 flex justify-between rounded-sm ' >
                      <div  className='rounded-xl'>
                        <h1 className='text-green-400 font-bold text-2xl'>{title}</h1>
                        <p>{description}</p>
                      </div>
                      
                      <div className='flex px-2 py-4 text-3xl space-x-4'>
                        <button 
                        onClick={()=>{
                          onDeleteTodo(id);
                          console.log(todo);
                          }}
                        className='hover:text-red-500 transition duration-300'
                        >
                          <SlTrash className='w-6 h-6 ' />
                        </button>
                        <button 
                        className='hover:scale-95' 
                        onClick={()=> handleComplete(id)}
                        >
                          <FcCheckmark className="w-[30px] h-[30px] " />
                        </button>

                      </div>
                    </section>
                </div>
            )
          })
        }
    </div>
  )
}
