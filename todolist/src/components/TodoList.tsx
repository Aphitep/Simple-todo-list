import type { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  handleComplete: (id: number) => void;
}

export default function TodoList({ todos, handleComplete }: TodoListProps) {
  const getTodoList = (todos: Todo[]) =>
    todos.map((todo) => {
      return (
        <li className="list-row flex justify-between" key={todo.id}>
          <div className={todo.status === "done" ? "line-through" : ""}>
            {todo.todo}
          </div>

          <div>
            <button
              className={`btn btn-xs ${todo.status === "done" ? "btn-soft" : "btn-outline"}`}
              onClick={() => handleComplete(todo.id)}
              disabled={todo.status === "done"}
            >
              {todo.status === "done" ? "Completed" : "Complete"}
            </button>
          </div>
        </li>
      );
    });

  return (
    <ul className="list bg-[#FFFBF1] rounded-sm shadow-md mt-2">
      {getTodoList(todos)}
    </ul>
  );
}
