
import { Schema, model, models } from "mongoose";

const TodoSchema = Schema({
    title: String,
    todo: String
})

const Todo = models?.Todo || model('Todo', TodoSchema)
export default Todo