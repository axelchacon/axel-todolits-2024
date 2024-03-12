// //////ejemplo 1 :Parecido a lo "todos" y "setTodos"//////////////////
// let objeto = { id: 1, nombre: "Axel", edad: 20 };
// console.log(objeto); //{ id: 1, nombre: 'Axel', edad: 20 }
// Haciendo una copia del objeto y agregando un nuevo campo
// let nuevoObjeto = { ...objeto, ciudad: "Peru" };
// console.log(nuevoObjeto); ////{ id: 1, nombre: 'Axel', edad: 20, ciudad: 'Peru' }
// Haciendo una copia del objeto con map
let objeto = [{ id: 1, nombre: "Axel", edad: 20, ciudad: "Peru" }];
console.log("objeto sin map: ", objeto); //{ id: 1, nombre: 'Axel', edad: 20 }
const hola = true;

const obmap = objeto.map((todo) => {
  if (hola) {
    return { ...todo, ciudad: "Huaraz" };
  }
  return todo;
});
console.log("objeto con map: ", obmap);
////// ejemplo 2: Probando como todo.id//////////////////
// let todos = [
//   { id: 1, nombre: "Axel", edad: 20 },
//   { id: 2, nombre: "Pedro", edad: 21 },
//   { id: 3, nombre: "Juan", edad: 24 },
// ];
// console.log("todos", todos);
// console.log("todo :", todos[0]);
// console.log("todo.id :", todos[0].id);
// const todosMap = todos.map((todo) => {
//   return todo.id;
// });
// console.log("todo.id con map:", todosMap);

// ////// ejemplo 3: Probando desestructurar un obtejo//////////////////
// let objeto = { id: 1, nombre: "Axel", edad: 20 };
// console.log("objeto :", objeto); //{ id: 1, nombre: 'Axel', edad: 20 }
// /////desestructurando todo///////
// // let { id, nombre, edad } = objeto;
// // const credentials = {
// // idin: id,
// // nombres: nombre,
// // edades: edad,
// // };
// // console.log("credentials :", credentials);
// /////desestructurando por partes///////
// // let { nombre, edad } = objeto;
// // const credentials = {
// //   nombres: nombre,
// //   edades: edad,
// // };
// // console.log("credentials :", credentials);
// /////desestructurando por partes en desorden///////
// let { edad, nombre } = objeto; /// el orden no altera la función
// const credentials = {
//   /// el orden puede alterar la ubicación de esta propiedades con su valor dentro del obketo
//   nombres: nombre,
//   edades: edad,
// };
// console.log("credentials :", credentials);
