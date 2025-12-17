import React from "react";

function TodoList2() {
  const todos = [
    { id: 1, text: "HTML high level language" },
    { id: 2, text: "JavaScript programminng language" },
    { id: 3, text: "css style the html" },
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

export default naList2;