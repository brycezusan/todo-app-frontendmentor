import { Header, TodoFilters, TodoList } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="z-40 absolute top-[26vh] md:top-[30vh] right-0 left-0 max-w-2xl mx-auto w-5/6 lg:w-full">
        {/* Todos List */}

        <TodoList />

        {/* Todos Filters */}
        <TodoFilters />

        {/* Footer Drag and Drop */}
        <footer className="text-center font-semibold text-slate-400">
          Drag and Drop to reorder list
        </footer>
      </main>
    </>
  );
}

export default App;
