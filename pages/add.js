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

            <h1>Add a new task</h1>
            <br/>

            <form onSubmit={addTodo}>
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

export default Add