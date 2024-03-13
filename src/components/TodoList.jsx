// rafce
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {/* esto retorna algo si las condiciones sí o sí son true */}
      {todos.length === 0 && "No todos"}

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            checked={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

// {/* <ul className="list">
//         {/* esto retorna algo si las condiciones sí o sí son true */}
//         {todos.length === 0 && "No todos"}

//         {todos.map((todo) => {
//           return (
//             <li key={todo.id}>
//               <label>
//                 <input
//                   type="checkbox"
//                   onChange={(e) => toggleTodo(todo.id, e.target.checked)} //target y checked son propiedad
//                 />
//                 {todo.title}
//               </label>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => deleteTodo(todo.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul> */}
TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default TodoList;
