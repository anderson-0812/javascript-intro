// console.log('Inicio');

// new Promise( (resolve, reject) => {
//     console.log('Saludos soy el cuerpo de una promesa');
//     resolve('Promesa resuelta')
//     // reject('Promesa resuelta')
// } )
// // Una forma mas elegante de enviar el primer arfunmento del la primera funcion 
// // es decir el msj a la otro funcion console de manera implicita seria

// // .then(msj => console.log(msj)) seria la que esta activa
// .then( console.log )
// .catch((err) => {
//     console.error(err);
// })

// console.log('Finalizado');

// EJERCICIO 2
import { getHeroById } from './bases/08-imp-exp'
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);

            if(hero){
                resolve(hero);
            }else{
                reject('Heroe No existe')
            }

        }, 1000)
    })
}


getHeroByIdAsync(100)
.then( console.log )
.catch( console.error )