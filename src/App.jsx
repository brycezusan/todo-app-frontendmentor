import { FaMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

function App() {
  return (
    <>
      <header className="relative background min-h-[30vh] md:min-h-[35vh] border z-10">
        <nav className="contenedor flex justify-between">
          <h2 className="font-bold text-4xl text-white tracking-widest">TODO</h2>
          <button>
            <FaMoon size={40} color="white" />
          </button>
        </nav>
        <form className="contenedor md:mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Create new todo..."
              className="w-full border py-3 placeholder:text-gray-400 text-slate-800 font-semibold rounded-md px-5 pl-16 outline-none"
            />
            <div className="absolute top-3 left-5 p-3 border  border-gray-300 rounded-full "></div>
          </div>
        </form>
      </header>
      <main className="z-40 absolute top-[26vh] md:top-[30vh] right-0 left-0 max-w-2xl mx-auto w-5/6 lg:w-full">
        <section className="bg-white  rounded-md shadow">
          <div className="flex justify-between items-center border-b border-gray-100 py-4 px-5 ">
            <div className="w-7 h-7 rounded-full border bg-blue-300 border-gray-300 border-transparent  text-white flex justify-center items-center">
              <FaCheck size={18} />
            </div>
            <p className="flex-1  ml-5 text-slate-950 font-semibold capitalize line-through opacity-50">contenido de todo</p>
            <button className="text-slate-400 ">
              <IoMdClose size={30} />
            </button>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100  py-4 px-5   ">
            <div className="w-7 h-7 rounded-full border border-gray-300 text-gray-400 flex justify-center items-center">
              <FaCheck size={18} />
            </div>
            <p className="flex-1  ml-5 text-slate-950 font-semibold capitalize">contenido de todo</p>
            <button className="text-slate-400">
              <IoMdClose size={30} />
            </button>
          </div>
          <div className="py-4 px-5 md:px-8 flex justify-between text-slate-400 font-medium">
            <p> 5  items left</p>
            <button>Clear Completed</button>
          </div>
        </section>
        <article className="my-8 p-4 flex justify-around bg-white">
          <button className="font-bold opacity-90  text-slate-800">All</button>
          <button className="font-bold opacity-90 text-gray-400">Active</button>
          <button className="font-bold opacity-90 text-gray-400">Completed</button>
        </article>
        <footer className="text-center font-semibold text-slate-400">
          Drag and Drop to reorder list
        </footer>
      </main>
    </>
  );
}

export default App;
