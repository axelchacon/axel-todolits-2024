//////Parecido a lo "todos" y "setTodos"//////////////////
let objeto = { id: 1, nombre: "Axel", edad: 20 };
console.log(objeto); //{ id: 1, nombre: 'Axel', edad: 20 }

// Haciendo una copia del objeto y agregando un nuevo campo
let nuevoObjeto = { ...objeto, ciudad: "Peru" };
console.log(nuevoObjeto); ////{ id: 1, nombre: 'Axel', edad: 20, ciudad: 'Peru' }
