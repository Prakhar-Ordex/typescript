"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTodo = exports.TodoContext = void 0;
const react_1 = require("react");
exports.TodoContext = (0, react_1.createContext)(null);
const Todos = ({ children }) => {
    const [todos, setTodos] = (0, react_1.useState)([]);
    const handleAddTodo = (task) => {
        setTodos((prev) => {
            const newTodos = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev,
            ];
            return newTodos;
        });
    };
    const toggleTodoAsCompleted = (id) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return Object.assign(Object.assign({}, todo), { completed: !todo.completed });
                }
                return todo;
            });
        });
    };
    const handleDeleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    return (<exports.TodoContext.Provider value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}>
      {children}
    </exports.TodoContext.Provider>);
};
exports.default = Todos;
const useTodo = () => {
    const todosConsumer = (0, react_1.useContext)(exports.TodoContext);
    if (!todosConsumer) {
        throw new Error("useTodo must be used within a TodosProvider");
    }
    return todosConsumer;
    ``;
};
exports.useTodo = useTodo;
