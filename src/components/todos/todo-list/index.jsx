import { useTodo } from "../../../hooks/usetodo";
import { TodoComputed } from "../todo-computed";
import { TodoItem } from "../todo-item";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const TodoList = () => {
  const { todos, removeTodo, toggleTodo, setTodos } = useTodo();

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  const isEmptyTodos = todos?.length === 0;
  const NoTodos = () => {
    return (
      <section className="bg-white dark:bg-slate-800 transicion py-4 rounded shadow">
        <h2 className="text-center font-bold text-slate-400 ">No hay tareas</h2>
      </section>
    );
  };

  if (isEmptyTodos) return <NoTodos />;

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todos">
        {(droppableProvider) => (
          <section
            ref={droppableProvider.innerRef}
            {...droppableProvider.droppableProps}
            className="bg-white dark:bg-slate-800 transicion rounded-md shadow"
          >
            {/* Todos Item */}
            {todos.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(draggableProvider) => (
                  <TodoItem
                    {...todo}
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.draggableProps}
                    {...draggableProvider.dragHandleProps}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                  />
                )}
              </Draggable>
            ))}
            {droppableProvider.placeholder}

            {/* Todo Computed */}
            <TodoComputed />
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
};
