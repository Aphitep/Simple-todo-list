import "./App.css";
import TodoList from "./components/TodoList";

type status = "pending" | "done";
export interface Todo {
  todo: string;
  status: status;
}
const todos: Todo[] = [
  { todo: "Go to work", status: "done" },
  { todo: "Go to sleep", status: "pending" },
  { todo: "Go to gym", status: "pending" },
];
function App() {
  return (
    <div className="bg-[#FFEABB] shadow-lg rounded-xl p-5 w-300 mt-5">
      <p className="text-center text-xl font-bold">Todo List</p>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
