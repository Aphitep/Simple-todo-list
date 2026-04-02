import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

type status = "pending" | "done";

export type Filter = "all" | "pending" | "done";
export interface Todo {
  id: number;
  todo: string;
  status: status;
}
const initialTodos: Todo[] = [
  { id: 1, todo: "Go to work", status: "done" },
  { id: 2, todo: "Go to sleep", status: "pending" },
  { id: 3, todo: "Go to gym", status: "pending" },
];
function App() {
  const [todoList, setTodolist] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = () => {
    if (!newTodo.trim()) {
      alert("Todo cannot be empty");
      return;
    }

    const todoID = todoList.length + 1;
    setTodolist([
      ...todoList,
      { id: todoID, todo: newTodo.trim(), status: "pending" },
    ]);
    setNewTodo("");
  };

  const handleComplete = (id: number) => {
    setTodolist((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, status: "done" } : todo,
      ),
    );
  };

  const filterTodoList = (value: Filter) => {
    setFilter(value);
  };
  const filteredTodos =
    filter === "all"
      ? todoList
      : todoList.filter((todo) => todo.status === filter);

  return (
    <div className="bg-[#FFEABB] shadow-lg rounded-xl p-5 w-300 mt-5">
      <p className="text-center text-xl font-bold">Todo List</p>

      <div className="text-center">
        <div className="join">
          <input
            type="text"
            className="input join-item"
            placeholder="Add a todo"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          />
          <button className="btn join-item" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
      <TodoFilter
        filterOptions={["all", "pending", "done"]}
        selected={filter}
        onChange={filterTodoList}
      />
      <TodoList todos={filteredTodos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
