import React from "react";

function TodoList() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice JavaScript" },
    { id: 3, text: "Build a Todo App" },
  ];

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;