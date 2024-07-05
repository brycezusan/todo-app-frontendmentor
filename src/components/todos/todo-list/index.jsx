import { useTodo } from "../../../hooks/usetodo";
import { TodoComputed } from "../todo-computed";
import { TodoItem } from "../todo-item";

export const TodoList = () => {
  const { todos, isEmptyTodos, removeTodo, toggleTodo } = useTodo();

  const NoTodos = () => {
    return (
      <section className="bg-white py-4 rounded shadow">
        <h2 className="text-center font-bold text-slate-400 ">No hay tareas</h2>
      </section>
    );
  };

  if (isEmptyTodos) return <NoTodos />;

  return (
    <section className="bg-white  rounded-md shadow">
      {/* Todos Item */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}

      {/* Todo Computed */}
      <TodoComputed />
    </section>
  );
};
