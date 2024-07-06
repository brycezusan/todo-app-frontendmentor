import { useTodo } from "../../../hooks/usetodo";

export const TodoFilters = () => {
  const { changeFilter , filtro } = useTodo();

  return (
    <article className="my-8 p-4 flex justify-around bg-white dark:bg-slate-800 transicion rounded-md">
      <button
        onClick={() => changeFilter("all")}
        className={`${filtro === 'all' ? 'text-slate-950 dark:text-blue-500' : ''} font-bold opacity-90 hover:text-slate-950  dark:hover:text-blue-600 text-gray-400`}
      >
        All
      </button>
      <button
        onClick={() => changeFilter("active")}
        className={`${filtro === 'active' ? 'text-slate-950 dark:text-blue-500' : ''} font-bold opacity-90 hover:text-slate-950  dark:hover:text-blue-600 text-gray-400`}

      >
        Active
      </button>
      <button
        onClick={() => changeFilter("completed")}
        className={`${filtro === 'completed' ? 'text-slate-950 dark:text-blue-500' : ''} font-bold opacity-90 hover:text-slate-950  dark:hover:text-blue-600 text-gray-400`}
         
      >
        Completed
      </button>
    </article>
  );
};
