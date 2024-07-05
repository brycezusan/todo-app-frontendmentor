import { Navegacion } from "../navegacion/Navegacion";
import { CreateTodo } from "../todos/create-todo";

export const Header = () => {
  return (
    <header className="relative background min-h-[30vh] md:min-h-[35vh] border z-10">
      {/* Navegacion */}
      <Navegacion />
      {/* Create Todo */}
      <CreateTodo />
    </header>
  );
};
