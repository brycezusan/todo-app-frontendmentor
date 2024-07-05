import { createContext, useMemo, useState } from "react";
import { todos as todoData } from "../data/todos";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(todoData);
  const [filtro, setFiltro] = useState("all");

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

  const changeFilter = (value) => {
    setFiltro(value);
  };

  const filterTodos = (filtro) => {
    if (filtro === "all") return todos;
    if (filtro === "completed") return todos.filter((todo) => todo.completed);
    if (filtro === "active") return todos.filter((todo) => !todo.completed);
  };

  const isEmptyTodos = todos.length === 0;
  const totalTodos = useMemo(() => filterTodos(filtro).length, [filtro, todos]);

  return (
    <TodoContext.Provider
      value={{
        todos: filterTodos(filtro),
        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,
        changeFilter,
        isEmptyTodos,
        totalTodos,
        filtro,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
