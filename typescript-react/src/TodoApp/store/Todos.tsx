import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};
type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

type TodoContexts = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContexts | null>(null);

const Todos = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
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

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id!== id));
  };  

  return (
    <TodoContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted ,handleDeleteTodo}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Todos;

export const useTodo = () => {
  const todosConsumer = useContext(TodoContext);
  if (!todosConsumer) {
    throw new Error("useTodo must be used within a TodosProvider");
  }
  return todosConsumer;
  ``;
};
