import axios from 'axios'


// `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` 


const apiKey = 'XDpcpPQnhntlx5NoVFN8yhyETHIyfopY'

// creo una instancia de axios pre configurada para resumir codigo
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// giphyApi.get('/random')
//     .then((response) => {
//         // console.log(response);
//         const { url } = response.data.data.images.original
//         // console.log(url);

//         const img = document.createElement('img')
//         img.src = url

//         document.body.append(img)

//     })

export default giphyApi