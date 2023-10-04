
import Navbar from '@/components/Navbar'
import dbConnexion from '@/lib/dbConnexion'
import Todo from '@/models/todo'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'



export default function Home() {
  const router = useRouter()
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('/api/todo')
    .then(response => response.json())
    .then(json => setTodos(json))
  },[])




  const formStabilite = (e)=>{
    e.preventDefault()
  }

  const deleteTodo = async (id)=>{
    fetch(`/api/delete?id=${id}`)
    .then(console.log('Element deleted succefully'))
    .then(()=>{
        fetch('/api/todo')
        .then(res => res.json())
        .then(json => setTodos(json))
    })
    .then(res =>{
      if(res) return redirect('/')
      // router.push('/')
      
    })
    
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
            <Link href={"/edit/"+todo._id}>
              <button>edit</button>
            </Link>
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