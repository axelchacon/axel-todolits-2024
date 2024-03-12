import { useState } from "react";
import "./style.css";

function App() {
  const [newItem, setNewItem] = useState("");
  function handleChange(event) {
    setNewItem(event.target.value);
  }
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={handleChange}
          />
          <p>{newItem}</p>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
