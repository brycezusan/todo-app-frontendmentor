import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
export const TodoItem = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-100 py-4 px-5 ">
        <div className="w-7 h-7 rounded-full border bg-blue-300 border-gray-300 border-transparent  text-white flex justify-center items-center">
          <FaCheck size={18} />
        </div>
        <p className="flex-1  ml-5 text-slate-950 font-semibold capitalize line-through opacity-50">
          contenido de todo
        </p>
        <button className="text-slate-400 ">
          <IoMdClose size={30} />
        </button>
      </div>
      <div className="flex justify-between items-center border-b border-gray-100  py-4 px-5   ">
        <div className="w-7 h-7 rounded-full border border-gray-300 text-gray-400 flex justify-center items-center">
          <FaCheck size={18} />
        </div>
        <p className="flex-1  ml-5 text-slate-950 font-semibold capitalize">
          contenido de todo
        </p>
        <button className="text-slate-400">
          <IoMdClose size={30} />
        </button>
      </div>
    </>
  );
};
