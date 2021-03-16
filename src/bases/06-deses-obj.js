
// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const contexto = ( {clave, nombre, edad, rango = 'Capitan'} ) => {
    //console.log(nombre, edad, `Cargo: ${rango}`);

    return{
        nombreClave: clave,
        anios:  edad,
        latlng: {
            lat: 14.213212,
            lng: -12.32323
        }
    }
};


// desestructuración anidada de objetos
const { nombreClave, anios, latlng:{lat, lng} } = contexto(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

