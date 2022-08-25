const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]


const existeHeroe = (heroe) => {
    return heroes.some((elem)=> {
        return elem.id == heroe
    })
}

const buscarHeroe = (heroe) => {
    return heroes.find((elem)=> {
        return elem.id == heroe
    })
}

console.log(existeHeroe(1));
console.log(buscarHeroe(1).name);