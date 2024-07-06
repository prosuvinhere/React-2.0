import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4(),isDone: false}]);
    let [newTodo,setNewTodo] = useState("")



    let addNewTask = () => {
        setTodos( (prevTodo) => {
            return [...prevTodo,{task: newTodo, id: uuidv4(), isDone : false}]
        })
        setNewTodo("")
    }

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos( (prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodos( (prevTodo) => prevTodo.map((todo) => {
            return{
                ...todo,
                isDone : true,
            }
        })
    )
    }

    let markAsDone = (id) => {
        setTodos( (prevTodo) => prevTodo.map((todo) => {
            if(todo.id == id){
            return{
                ...todo,
                isDone: true,
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
                            <span style={todo.isDone ? {textDecoration: "line-through"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => markAsDone(todo.id)}>mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>mark as done All</button>
        </div>
    )
}