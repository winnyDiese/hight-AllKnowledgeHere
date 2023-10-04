
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
            <h1>Edit</h1>
           
            <form onSubmit={editTodo}>
                <div>
                    <input type="text" placeholder="Titre..." value={title} onChange={e => setTitle(e.target.value)} /><br/>
                    <input type="text" placeholder="Description..." value={todo} onChange={e => setTodo(e.target.value)} /><br/>
                    <button type="submit">Add</button>
                    <button type="reset">Reset</button>
                </div>
            </form>

        </>
    )
}