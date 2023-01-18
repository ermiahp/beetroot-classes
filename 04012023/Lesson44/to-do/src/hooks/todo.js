import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    debugger;
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return {
    todos,
    input,
    updateInput,
    addTodo,
    deleteTodo,
  };
};
