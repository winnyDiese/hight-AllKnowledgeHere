
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
    <br/>      
    <br/>      
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg m-10">
        <div>
            <h1 className="uppercase ml-2 mt-3  text-2xl ">Edit the task</h1>
        </div>
        <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
            <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 m-5" type="button">
                    <span className="sr-only">Action button</span>
                    Action
                    {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg> */}
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                    </div>
                </div>
            </div>
            <label for="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg> */}
                </div>
                <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
            </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                
              {todos.map(todo => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        {todo.title}
                    </td>
                    <td className="px-6 py-4">
                        {todo.todo}
                    </td>
                    <td className="px-6 py-4">
                        {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a> */}

                        

                        <form onSubmit={formStabilite} className="inline-block" >
                          <input type="hidden" />
                          <button 
                            onClick={()=>deleteTodo(todo._id)} 
                            id="dropdownActionButton" 
                            data-dropdown-toggle="dropdownAction" 
                            className="-ml-7 inline-flex items-center text-white hover:text-gray-500 bg-[#f45757] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 m-5" 
                            type="submit"
                          >
                            Delete
                          </button>
                        </form>
                      
                      <Link href={"/edit/id="+todo._id}>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="-ml-3 inline-flex items-center text-white hover:text-gray-500 bg-sky-400 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 m-5" type="button">
                          Edit
                        </button>
                      </Link>

                    </td>
                </tr>

              ))}

            </tbody>
        </table>
    </div>



  </>
 )
}


// export async function getServerSideProps(){
//   const 
//   return {

//   }
// }