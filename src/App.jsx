import { useState } from "react";
import "./style.css";

function App() {
  const [newItem, setNewItem] = useState(""); ///variable de estado para controlar el input
  const [todos, setTodos] = useState([]); ///variable de estado para controlar la lista de las tareas

  function handleChange(event) {
    setNewItem(event.target.value); ///valor string donde la variable de estado es string;
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");
    ///del setTodos es un valor array o es un estado tipo array por lo que se maneja especial mente con copia usando los pntos "....."
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      },
    ]);
    setNewItem(""); ///esto permite que luego de escibir en el input, ese valor no se queda en el cuadro del input al moento de terminar de aplastar ADD sino que al terminar de apalstar queda vacío si guardarse el valor último escrito agregado
  }

  //// toggleTodo forma1 /////
  // function toggleTodo(id, checked) {
  //   setTodos(function (currentTodos) {
  //     return currentTodos.map(function (todo) {
  //       if (todo.id === id) {
  //         return { ...todo, completed: checked };
  //       }
  //       return todo;
  //     });
  //   });
  // }
  //// toggleTodo forma2 /////
  function toggleTodo(id, checked) {
    ////setTodos = currentTodos
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: checked };
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={handleChange}
          />
          {/* <p>{newItem}</p> */}
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {/* esto retorna algo si las condiciones sí o sí son true */}
        {todos.length === 0 && "No todos"}

        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)} //target y checked son propiedad
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
