import { useTodo } from "../../../hooks/usetodo";

export const TodoComputed = () => {
  const {totalTodos ,clearCompleted } = useTodo();

  return (
    <div className="py-4 px-5 md:px-8 flex justify-between text-slate-400 font-medium">
      <p> {totalTodos} items left</p>
      <button
        onClick={clearCompleted}
      >Clear Completed</button>
    </div>
  );
};
