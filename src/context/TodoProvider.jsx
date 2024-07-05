import { createContext, useState } from "react";
import { todos as todoData } from "../data/todos";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(todoData);

  const addTodo = (todo) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const isEmptyTodos = todos.length === 0;
  const totalTodos = todos.length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,
        isEmptyTodos,
        totalTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
