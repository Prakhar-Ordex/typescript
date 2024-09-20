import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./store/Todos";
import Navbar from "./components/Navbar";
import TodosList from "./components/Todoslist";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <h1>TODO REACT + TYPESCRIPT </h1>
          <Todos>
            <Navbar />
            <AddTodo />
            <TodosList />
          </Todos>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
