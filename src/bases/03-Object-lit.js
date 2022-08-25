const persona = {
    nombre:'Anderson',
    apellido:'Stark',
    edad:'40',
    direccion: {
        ciudad: 'Loja',
        barrio: 'valle',
    }
}

const persona2 = { ...persona} 

persona2.nombre = 'Tony';

console.log(persona);
console.log(persona2);