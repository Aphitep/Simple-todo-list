import type { Todo } from "../App";

export default function TodoList({ todos }: { todos: Todo[] }) {
  const getTodoList = (todos: Todo[]) =>
    todos.map((todo) => {
      if (todo.status === "done") {
        return (
          <li className="list-row flex justify-between" key={todo.id}>
            <div className="line-through">{todo.todo}</div>
            <div>
              <button className="btn btn-xs btn-soft" disabled>
                Completed
              </button>
            </div>
          </li>
        );
      } else {
        return (
          <li className="list-row flex justify-between" key={todo.id}>
            <div>{todo.todo}</div>
            <div>
              <button className="btn btn-xs btn-outline">Complete</button>
            </div>
          </li>
        );
      }
    });

  return (
    <ul className="list bg-[#FFFBF1] rounded-sm shadow-md mt-2">
      {getTodoList(todos)}
    </ul>
  );
}
