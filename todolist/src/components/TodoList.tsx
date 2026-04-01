const todos = ["Eat breakfast", "Go to work", "Go to sleep"];
export default function TodoList() {
  return (
    <ul className="list bg-[#FFFBF1] rounded-sm shadow-md mt-2">
      {todos.map((todo, index) => {
        return (
          <>
            <li className="list-row" key={index}>
              <div>{todo}</div>
            </li>
          </>
        );
      })}
    </ul>
  );
}
