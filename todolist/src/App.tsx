import "./App.css";

const todos = ["Eat breakfast", "Go to work", "Go to sleep"];

function App() {
  return (
    <div className="container shadow-lg rounded-xl p-5">
      <p className="text-center text-xl font-bold">Todo List</p>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </div>
  );
}

export default App;
