import { owners } from '../data/heroes'
import superHeroes from '../data/heroes'

// console.log(owners);
// console.log(superHeroes);

export const getHeroById = (id) => {
    return superHeroes.find(element => element.id === id)
}

// console.log('Heroe encontrado', getHeroById(2));

// Otra forma de crear funciones
export const getHeroByOwner = (owner) => superHeroes.filter((element) => element.owner === owner)


// console.log('Heroes encontrado por Owner', getHeroByOwner('Marvel'));
