//https://developers.giphy.com/dashboard/?
// url de imagenes ramdom
// https://api.giphy.com/v1/gifs/random?api_key=XDpcpPQnhntlx5NoVFN8yhyETHIyfopY

const apiKey = 'XDpcpPQnhntlx5NoVFN8yhyETHIyfopY'

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json() )
    // este then hace referencia a la respuiesta del anterior y estoy 
    //destructurando la respuesta
    .then( ({data}) => {
        console.log(data);

        const { url } = data.images.original

        console.log(url);

        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })
    .catch( err => {
        console.log('Error en la peticion'.err);
    })