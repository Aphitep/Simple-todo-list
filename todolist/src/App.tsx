import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

type status = "pending" | "done";
export interface Todo {
  id: number;
  todo: string;
  status: status;
}
const todos: Todo[] = [
  { id: 1, todo: "Go to work", status: "done" },
  { id: 2, todo: "Go to sleep", status: "pending" },
  { id: 3, todo: "Go to gym", status: "pending" },
];
function App() {
  const [todoList, setTodolist] = useState<Todo[]>(todos);
  const [NewTodo, setNewTodo] = useState("");

  const addTodo = () => {
    const todoID = todos.length + 1;
    if (NewTodo) {
      setTodolist([
        ...todoList,
        { id: todoID, todo: NewTodo, status: "pending" },
      ]);
    } else {
      throw new Error("Todo cannot be empty");
    }
    setNewTodo("");
  };

  const handleComplete = (id: number) => {
    const updatedTodoList: Todo[] = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "done" };
      }
      return todo;
    });
    setTodolist(updatedTodoList);
  };
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
            value={NewTodo}
          />
          <button className="btn join-item" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>

      <TodoList todos={todoList} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
