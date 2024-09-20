import { useState ,useEffect} from 'react'
import axios from 'axios'
import NewTodo from './NewTodo'
import Todos from './Todos'
import './App.css'

export default function App() {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    const fetchTodos = async () =>{
      try{
        const response = await axios.get('http://localhost:8000/api/tasks/');
        setTodos(response.data);
      }
      catch(error){
        console.error('There was an error fetching the todos!',error)
      }
    }
    fetchTodos();
  },[]);

  const handleNewTodo = (newTodo) =>{
    setTodos([...todos, newTodo]);
  }

  const handleDelete = async(id) =>{
    try{
      await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
      setTodos(todos.filter(todo => todo.id!==id))
    }
    catch(error){
      console.error('Error deleting todo',error);
    }
  }

  const handleComplete = (id) =>{
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo , completed:true} : todo
    ))
  }
  return (
    <div className='bg-slate-900 h-screen text-white'>
      <div className='w-fit mx-auto pt-10 space-y-4'>
        <h1 className='text-center font-bold text-2xl'>Todos</h1>
        <div className='bg-slate-800 rounded-md  p-8 w-fit mx-auto '>
          <NewTodo onTodo = {handleNewTodo}/>
          <div className="max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800">
            <Todos todos={todos} onDeleteTodo = {handleDelete} onComplete = {handleComplete}/>
          </div>
        </div>
      </div>
    </div>
  )
}

