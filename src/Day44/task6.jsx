import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),   
      text: task
    };

    setTodos([...todos, newTodo]);
    setTask(""); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
