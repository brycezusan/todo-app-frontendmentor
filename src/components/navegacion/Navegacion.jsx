import { FaMoon } from "react-icons/fa";
import useToggleTheme from "../../hooks/useToogleTheme";
import { BsFillSunFill } from "react-icons/bs";

export const Navegacion = () => {
  const {ischecked , handleDarkMode , setIsChecked} = useToggleTheme()

  return (
    <nav className="contenedor flex justify-between">
    <h2 className="font-bold text-4xl text-white tracking-widest">
      TODO
    </h2>
    <div className="flex justify-center py-4 transicion">
      <input
        className="hidden"
        type="checkbox"
        id="check"
        checked={ischecked}
        onChange={() => setIsChecked(!ischecked)}
      />
      <label
        htmlFor="check"
        onClick={handleDarkMode}
        className="text-white cursor-pointer"
      >
        {ischecked ? <BsFillSunFill  size={30}/> : <FaMoon  size={30}/>}
      </label>
    </div>
  </nav>
  )
}
