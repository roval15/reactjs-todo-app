import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit} className="new-todo-form">
        <div className="form-row">
          <label htmlFor="new-todo-input">What needs to be done?</label>
          <input
            value={newItem}
            type="text"
            id="new-todo-input"
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="button-80">Add Task</button>
      </form>
      <h1 className="new-todo-title">To Do List:</h1>
      <ul className="new-todo-list">
        {todos.length === 0 && "No Tasks. Wohoo!"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label className="new-todo-container">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
                <button
                  className="btn delete-todo-task"
                  onClick={(e) => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
