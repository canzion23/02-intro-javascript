

const personajes = ['Goku','Vegeta','Trunks'];
console.log("🚀 ~ file: index.js ~ line 4 ~ personajes", personajes);

const [p1] = personajes;
const [ , p2 ] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

// const arr = retornaArreglo();
// console.log(arr)

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);



// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const datoState = ( valor ) => {
    return [valor, ()=>{ console.log('Hola Mundo') } ];
}

// const arr = datoState('Goku1');
// console.log(arr);
// arr[1]();

const [ nombre, setNombre ] = datoState('Goku1');
console.log(nombre);
setNombre();

