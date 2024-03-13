import PropTypes from "prop-types";
const TodoItem = ({ id, title, checked, toggleTodo, deleteTodo }) => {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => toggleTodo(id, e.target.checked)} //target y checked son propiedad
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
TodoItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  checked: PropTypes.bool,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default TodoItem;
