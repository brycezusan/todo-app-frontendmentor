import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
export const TodoItem = ({ id, title, completed, removeTodo, toggleTodo }) => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-100 py-4 px-5 ">
        <div
          className={`${
            completed && "bg-blue-300 border-transparent"
          } w-7 h-7 rounded-full border  border-gray-300  text-white flex justify-center items-center`}
        >
          <FaCheck size={18} />
        </div>
        <p
          onClick={() => toggleTodo(id)}
          className={`${
            completed && "line-through opacity-50"
          } flex-1  ml-5 text-slate-950 font-semibold capitalize  `}
        >
          {title}
        </p>
        <button onClick={() => removeTodo(id)} className="text-slate-400 ">
          <IoMdClose size={30} />
        </button>
      </div>
    </>
  );
};
