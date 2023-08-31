import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <form className="new-todo-form">
        <div className="form-row">
          <label htmlFor="new-todo-input">What needs to be done?</label>
          <input
            type="text"
            id="new-todo-input"
            placeholder="Enter your task here"
          />
        </div>
        <button className="button-80">Add Task</button>
      </form>
      <h1 className="new-todo-title">To Do List:</h1>
      <ul className="new-todo-list">
        <li>
          <label className="new-todo-container">
            <input type="checkbox"/> 
            Item 1
            <button className="btn delete-todo-task">Delete</button>
          </label>
        </li>
        <li>
        <label className="new-todo-container">
            <input type="checkbox"/> 
            Item 1
            <button className="btn delete-todo-task">Delete</button>
          </label>
        </li>
      </ul>

    </>
  );
}

export default App;
