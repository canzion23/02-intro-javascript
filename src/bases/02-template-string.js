

//Template String

const nombre = 'Luis';
// console.log("🚀 ~ file: index.js ~ line 6 ~ nombre", nombre)
const apellido = 'Garcia';

// const nombreCompleto = nombre + ' ' + apellido;
// console.log("🚀 ~ file: index.js ~ line 10 ~ nombreCompleto", nombreCompleto)

const nombreCompleto = `${nombre} ${apellido}`;
console.log("line 13 ~ nombreCompleto", nombreCompleto)

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(` Este es un texto: ${ getSaludo(nombreCompleto) }`);

