// import { heroes } from './data/heroes';

// importación y exportación

// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners);

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//        if (heroe.id === id ) {
//            return true;
//        }
//        else {
//            return false;
//        }
//     });

// };

// Construcción de una función para obtener un objeto en base a una de sus propiedades
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));

// console.log(getHeroesByOwner('Marvel'));
