
import Navbar from "@/components/Navbar"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Edit({params}){
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')
    const router = useRouter()


    const editTodo = (e)=>{

        e.preventDefault()
        const id = router.query.id.split('=')

        fetch(`/api/edit/${id[1]}`,{
            method: 'PUT',
            body: JSON.stringify({title, todo}),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .catch(error=> console.log(error))
    }

    return (
        <>
            <Navbar />
            <br/>       
            <form onSubmit={editTodo}>
                <div className="p-10 mb-10">
                    <div>
                        <h1 className="uppercase -ml-6 text-2xl mb-10">Edit the task</h1>
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="first_name" className=" w-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..." required/>
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" id="last_name" className=" w-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..." required/>
                    </div>
                    <div>
                        <button type="submit" className="W-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a task</button>
                    </div>
                    
                </div>

            </form>

        </>
    )
}