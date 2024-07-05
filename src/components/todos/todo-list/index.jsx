import { TodoComputed } from "../todo-computed";
import { TodoItem } from "../todo-item";
export const TodoList = () => {
  return (
    <section className="bg-white  rounded-md shadow">
      {/* Todos Item */}
      <TodoItem />
 
      {/* Todo Computed */}
      <TodoComputed />
    </section>
  );
};
