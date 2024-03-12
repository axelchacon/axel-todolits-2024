// rafce
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul className="list">
      {/* esto retorna algo si las condiciones sí o sí son true */}
      {todos.length === 0 && "No todos"}

      {todos.map((todo) => {
        return (
          <TodoItem id={todo.id} title={todo.title} checked={todo.completed} />
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

export default TodoList;
