const activo = true;

// let mensaje = '';

// if (activo) {
//   mensaje = 'Activo';
// } else {
//   mensaje = 'Inactivo'
// }

// Operador ternario
// const mensaje = (!activo) ? 'Activo' : 'Inactivo';

// Por si no quiero evaluar nada en el false
// const mensaje = (!activo) ? 'Activo' : null;

// Una manera corta de realizar un if, sino necesito evaluar el else, esta es la forma corta
const mensaje = activo && 'Activo';
console.log(mensaje);

