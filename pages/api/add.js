import dbConnexion from "@/lib/dbConnexion"
import Todo from "@/models/todo"

const add = async (req, res)=>{
    dbConnexion()
    
    const {title,todo} = req.body
    const newTodo =  new Todo({title, todo})
    const result =  await newTodo.save()

    res.send(result)
}

export default add