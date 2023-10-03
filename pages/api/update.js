import dbConnexion from "@/lib/dbConnexion";
import Todo from "@/models/todo";


export default function handler(req, res){
    dbConnexion()
    // const {id} = req.params
    // const Todos = new Todo.deleteOne({_id:id})
    res.send(req.body)

