<<<<<<< HEAD
// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function


const request = new XMLHttpRequest()

const url ='http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0'

request.onreadystatechange = mostraGif;
request.open('GET', url)
request.send()


function mostraGif() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response
        
        const json =  JSON.parse(response)
        let url = json.data[0].images.original.url

        let imagem = document.getElementById('imagem')
        imagem.setAttribute('src', url)
    } else {
      
    }   
    
}

=======
// XMLHttpRequest na rota random

const urlRequest = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`

const request = new XMLHttpRequest()
request.onreadystatechange = mostraGif;
request.open('GET', urlRequest);
request.send();

function mostraGif() {
  if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);

    const imgUrl = json.data.images.original.url;

    const img = document.getElementById('imagem');
    img.src = imgUrl;
  }
}
>>>>>>> 4a9acb5fe1637e0dda7f71909d3b55219fba80cb
