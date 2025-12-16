import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");     
  const [todos, setTodos] = useState([]);    

  const handleAdd = () => {
    if (task.trim() === "") return;           
    setTodos(prev => [...prev, task]);        
    setTask("");                               
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>To-Do List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        onClick={handleAdd}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;