import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewTodo] = useState("")


    let addNewTask = () => {
        setTodos( (prevTodo) => {
            return [...prevTodo,{task: newTodo, id: uuidv4()}]
        })
        setNewTodo("")
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos( (prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
        setTodos( (prevTodo) => prevTodo.map((todo) => {
            return{
                ...todo,
                task: todo.task.toUpperCase()
            }
        })
    )
    }

    let upperCaseOne = (id) => {
        setTodos( (prevTodo) => prevTodo.map((todo) => {
            if(todo.id == id){
            return{
                ...todo,
                task: todo.task.toUpperCase()
            }}else{
                return todo;
            }
        })
    )
    }

    return(
        <div>
            <input placeholder="add items" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTask}>Submit</button>
            <br />
            <br />
            <hr />
            <h4>Task todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key = {todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>mark as done</button>
        </div>
    )
}