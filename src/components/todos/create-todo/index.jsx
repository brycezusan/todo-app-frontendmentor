
export const CreateTodo = () => {
  return (
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
  )
}
