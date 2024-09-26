"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Todos_1 = require("../store/Todos");
const TodosList = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = (0, Todos_1.useTodo)();
    console.log(todos);
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    let todos̥Data = searchParams.get("todos");
    let filterData = todos;
    if (todos̥Data === "active") {
        filterData = filterData.filter((task) => !task.completed);
    }
    if (todos̥Data === "completed") {
        filterData = filterData.filter((task) => task.completed);
    }
    return (<ul className="main-task">
        {filterData.map((todo) => {
            return <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)}/>
                    <label htmlFor={`todo-${todo.id}`}> {todo.task} </label>

                    {todo.completed && (<button type='button' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>)}
                </li>;
        })}
    </ul>);
};
exports.default = TodosList;
