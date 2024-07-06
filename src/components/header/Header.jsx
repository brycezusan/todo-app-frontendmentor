import { Navegacion } from "../navegacion/Navegacion";
import { CreateTodo } from "../todos/create-todo";

export const Header = () => {
  return (
    <header className="relative
    bg-[url('../src/assets/images/bg-mobile-light.jpg')]
    dark:bg-[url('../src/assets/images/bg-mobile-dark.jpg')]
    md:bg-[url('../src/assets/images/bg-desktop-light.jpg')]
    dark:md:bg-[url('../src/assets/images/bg-desktop-dark.jpg')]
    bg-center bg-cover
    min-h-[30vh] md:min-h-[35vh] border dark:border-none z-10
    transicion
    ">
      {/* Navegacion */}
      <Navegacion />
      {/* Create Todo */}
      <CreateTodo />
    </header>
  );
};
