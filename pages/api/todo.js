

import dbConnexion from "@/lib/dbConnexion";
import Todo from '@/models/todo'

export default async function handler(req, res){
    dbConnexion()
    const Todos = await Todo.find()
    res.json(Todos)
}

