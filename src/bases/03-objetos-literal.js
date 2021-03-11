// Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555555,
        lat: 14.23232,
        lng: 34.923333,
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

