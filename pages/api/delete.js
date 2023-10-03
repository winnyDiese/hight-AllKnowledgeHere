import dbConnexion from "@/lib/dbConnexion";
import Todo from "@/models/todo";


export default async function handler(req, res){
    const {method, query, query:{id}} = req
    
    dbConnexion()
    const todo = await Todo.deleteOne({_id:id})
    return res.json(todo)
}
