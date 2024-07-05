import { FaMoon } from "react-icons/fa";

export const Navegacion = () => {
  return (
    <nav className="contenedor flex justify-between">
    <h2 className="font-bold text-4xl text-white tracking-widest">
      TODO
    </h2>
    <button>
      <FaMoon size={40} color="white" />
    </button>
  </nav>
  )
}
