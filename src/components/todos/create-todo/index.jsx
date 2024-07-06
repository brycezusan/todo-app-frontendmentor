import { useState } from "react";
import { useTodo } from "../../../hooks/usetodo";

export const CreateTodo = () => {

  const [value, setValue] = useState("");
  const {addTodo} = useTodo();

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
      }}
      className="contenedor md:mt-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Create new todo..."
          className="w-full border dark:border-none  py-3 placeholder:text-gray-400 text-slate-800 dark:text-gray-200 dark:bg-slate-800 font-semibold rounded-md px-5 pl-16 outline-none transicion"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="absolute hover:bg-slate-800 hover:border-transparent top-3 left-5 p-3 border  border-gray-300 rounded-full "></button>
      </div>
    </form>
  );
};
