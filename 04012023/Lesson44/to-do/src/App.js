import "./App.css";
import { useTodo } from "./hooks/todo";

function App() {
  const { todos, input, updateInput, addTodo, deleteTodo } = useTodo();
  return (
    <div className="App">
      <h1>Todo:</h1>
      <div>
        <input type="text" onChange={(e) => updateInput(e)} value={input} />
        <button onClick={addTodo}>Add</button>
      </div>
      {todos &&
        todos.map((todo, index) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <input type="checkbox" />
            <p>{todo}</p>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default App;
