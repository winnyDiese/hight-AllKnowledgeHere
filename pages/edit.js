import { useState } from "react"

export default function Edit(){
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')

    const editTodo = ()=>{
        console.log('Edit')
    }

    return (
        <>
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