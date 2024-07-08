import { createContext, useEffect, useState } from "react";
// import { todos as todoData } from "../data/todos";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {

  const initialState = ()=>{
    const todoStorage  = localStorage.getItem("todos")
    return todoStorage ? JSON.parse(todoStorage) : []
  }

  const [todos, setTodos] = useState(initialState());
  const [filtro, setFiltro] = useState("all");


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

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


  return (
    <TodoContext.Provider
      value={{
        todos: filterTodos(filtro),
        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,
        changeFilter,
        filtro,
        setTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
