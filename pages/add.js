import Navbar from "@/components/Navbar"
import { redirect } from "next/navigation"
import { useState } from "react"

const Add = ()=>{
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')

    const addTodo =(e)=>{
        e.preventDefault()
        let redir = false

        fetch(`/api/add`, {
            method: 'POST',
            body: JSON.stringify({title, todo}),
            headers: { 
                'Content-Type':'application/json'
            }
        }).then(result => {
            redir = true
            if(result) return redirect('/')
        }).catch(err=>console.log(err))

        setTitle('')
        setTodo('')
        redir = true
        if(redir) return redirect('/')
    }

    return (
        <>
            <Navbar />
        
        <div className="m-10">

            <br/>
                        
            <form onSubmit={addTodo}>
                <div className="p-10 mb-6">
                    <div>
                        <h1 className="uppercase -ml-6 mb-5 text-2xl">Add a new task</h1>
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
                        <button type="submit" className="W-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                    
                </div>

            </form>
        </div>
        

        </>
    )
}

export default Add