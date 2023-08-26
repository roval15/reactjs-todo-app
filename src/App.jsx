import { useState } from "react";
import "./App.css";

function App() {
  return (
    <form className="new-todo-form">
      <div className="form-row">
        <label htmlFor="new-todo-input">What needs to be done?</label>
        <input type="text" id="new-todo-input" />
      </div>
      <button className="button-80">Add Task</button>
    </form>
  );
}

export default App;
