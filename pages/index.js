
import Navbar from '@/components/Navbar'
import dbConnexion from '@/lib/dbConnexion'
import Todo from '@/models/todo'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'



export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('/api/todo')
    .then(response => response.json())
    .then(json => setTodos(json))
  },[])

  const formStabilite = (e)=>{
    e.preventDefault()
    // console.log('Stabilite')
  }

  // console.log({Todo})


  const deleteTodo = async (id)=>{
    try {
      // await Todo.deleteOne({_id:id})
      await Todo.findAndDalete({_id:id})
      console.log('Element deleted')
    } catch (error) {
      console.log(error)
    }
    // redirect('/')
  }


 return (
  <>
    <Navbar />
    <h1>All Todo</h1>
    <br/>

    <ul>

      {todos.map(todo => (
        <li key={todo._id}>{todo.title} - {todo.todo} 
          <div> 
            <form onSubmit={formStabilite} >
              <input type="hidden" />
              <button type='submit' onClick={()=>deleteTodo(todo._id)}>Remove</button>
            </form>
            <button>Add</button>
          </div>
          <hr/>
        </li>
      ))}
      
    </ul>
  </>
 )
}


// export async function getServerSideProps(){
//   const 
//   return {

//   }
// }