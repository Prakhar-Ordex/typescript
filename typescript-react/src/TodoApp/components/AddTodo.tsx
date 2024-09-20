import React, { FormEvent, useState } from "react";
import "./App.css"
import { useTodo } from "../store/Todos";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const {handleAddTodo} = useTodo()
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => { 
      e.preventDefault();
      if (!todo.trim().length) {
        console.error("Todo is empty");
        setTodo("")
        return;  // Stop form submission if todo is empty
      }
        handleAddTodo(todo)
        setTodo("")
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
