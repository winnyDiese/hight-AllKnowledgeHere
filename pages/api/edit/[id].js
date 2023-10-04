
import dbConnexion from "@/lib/dbConnexion"
import Todo from "@/models/todo"

const edit = async (req,res)=>{
    dbConnexion()

    const {method, body:{title,todo}, query:{id}} = req
    const updateTodo = await Todo.findByIdAndUpdate({_id:id}, {title, todo})

    return res.json(updateTodo)
}

export default edit