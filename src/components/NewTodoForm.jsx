import { useState } from "react";
import PropTypes from "prop-types";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submit");
    if (newItem === "") return;
    ///del setTodos es un valor array o es un estado tipo array por lo que se maneja especial mente con copia usando los pntos "....."
    onSubmit(newItem);
    // setTodos([
    //   ...todos,
    //   {
    //     id: crypto.randomUUID(),
    //     title: newItem,
    //     completed: false,
    //   },
    // ]);
    setNewItem(""); ///esto permite que luego de escibir en el input, ese valor no se queda en el cuadro del input al moento de terminar de aplastar ADD sino que al terminar de apalstar queda vacío si guardarse el valor último escrito agregado
  }
  function handleChange(event) {
    setNewItem(event.target.value); ///valor string donde la variable de estado es string;
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" value={newItem} onChange={handleChange} />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};
///Recordar poner en el terminal para prop-types : "npm install prop-types" y poner en tu archivo "import PropTypes from "prop-types";"
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;
