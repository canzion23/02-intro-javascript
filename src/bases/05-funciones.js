// Funciones en JS


// Función nomal
const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

// Función de flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

// Función de flecha simplificada
const saludar3 = (nombre) => `Hola, ${nombre}`;

//Función de flecha sin argumentos
const saludar4 = () => `Hola, Luis`;

console.log( saludar ('Goku'));
console.log( saludar2 ('Vegeta'));
console.log( saludar3('Frezeer'));
console.log( saludar4());

const getUser = () => ({
    uid: 'ABC123456',
    username: 'El_principito',
});

const user = getUser();
console.log(user);

//Tarea
// 1. Convertir a una funcion de flecha
// 2. Retornar un objeto implicito
// 3. Probarlo

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC123456',
//         username: nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('Luis');
// console.log(usuarioActivo);

// solución: 
const getUsuarioActivo = (nombre) => 
     ({
        uid: 'ABC1234567',
        username: nombre,
    });

const usuarioActivo = getUsuarioActivo('Geovanni');
console.log("usuarioActivo", usuarioActivo);


