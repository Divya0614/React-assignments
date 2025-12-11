import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState(""); 
  const [todos, setTodos] = useState([]); 

  const addTask = () => {
    if (task.trim() === "") return; 
    setTodos([...todos, task]); 
    setTask(""); 
  };

  return (
    <div>
      <h2>To-Do App</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
