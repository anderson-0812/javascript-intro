const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'Dinero',
}


// destructuracion de obj,
// podemos inicializar la valiable en caso deque no venga con valor va el de por defecto
const {name, codeName, age, power= 'No tiene poder'} = person

console.log(name);
console.log(codeName);
console.log(age);
console.log(power);


// De esta manera tb podemos desestructurar un obj q recibimos de parametro {power='No tiene poderes', age, codeName, name}
// de esta manera se ahce un return implicito con parentesis
const createHero = ({power='No tiene poderes', age, codeName, name}) => (

    // const {power='No tiene poderes', age, codeName, name} = person
     {
        id: 123456,
        name,
        age: age,
        codeName,
        power: power,
    }

)

console.log(createHero(person));