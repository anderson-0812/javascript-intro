
const miPro = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('REJECT Tenemos un valor en la promesa')
        }, 1000)

    });
}

const medirTiempoAsync = async () =>{

    try{
        console.log('Inicio');
        
        // miPro().then(console.log)
        const resp = await miPro()
        console.log(resp);
        
        
        console.log('Fin');

        return 'Fin de medir tiempo'

    }catch(err){
        console.log('Error:',err);
        // return 'Catch en medirtimepo '
        //maneracorrecta de retornar errores 
        throw 'Catch en medirtimepo '
    }
    

    


}

medirTiempoAsync()
    .then(console.log)
    .catch(console.error)