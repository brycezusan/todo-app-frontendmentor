export const TodoFilters = () => {
  return (
    <article className="my-8 p-4 flex justify-around bg-white">
      <button className="font-bold opacity-90 hover:text-slate-950  text-slate-800">
        All
      </button>
      <button className="font-bold opacity-90 hover:text-slate-950 text-gray-400">
        Active
      </button>
      <button className="font-bold opacity-90 hover:text-slate-950 text-gray-400">
        Completed
      </button>
    </article>
  );
};
