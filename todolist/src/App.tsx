import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container shadow-lg rounded-xl p-5 w-300">
      <p className="text-center text-xl font-bold">Todo List</p>
      <TodoList />
    </div>
  );
}

export default App;
