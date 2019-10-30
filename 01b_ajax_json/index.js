// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response
// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

<<<<<<< HEAD
const url = './data.dados.json'
const req = new XMLHttpRequest()
req.open('GET', url)
req.send()

req.onreadystatechange = pegarDados
function pegarDados () {
    const response = req.response
    const json = JSON.parse(response)
    console.log(json)
    
=======
const div = document.querySelector('#root');
const url = './data/dados.json';

const req = new XMLHttpRequest();
req.open('GET', url);
req.send();

req.onreadystatechange = pegarDados;

function pegarDados() {
  if (req.readyState === 4) {
    if (req.status === 200) {
      const response = req.response;
      const json = JSON.parse(response);
      const data = json.data;
      // criarImagens(data);
      // criarImagensFor(data);
      // criarImagensForEach(data);
      criarImagensForOf(data);
    }
  }
}


function criarImagens(array) {
  div.innerHTML += `
  <img src=${array[0].imagem} >
  <img src=${array[1].imagem} >
  <img src=${array[2].imagem} >
  `
}

function criarImagensFor(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const img = `<img src=${element.imagem}>`;
    div.innerHTML += img
  }
}

function criarImagensForEach(array) {
  array.forEach(element => {
    console.log(element);
    const img = `<img src=${element.imagem}>`;
    div.innerHTML += img;
  });
}

function criarImagensForOf(array) {
  for (const posicao of array) {
    // const img = `<img src=${posicao.imagem}>`;
    // div.innerHTML = img;
    const img = document.createElement('img');
    img.src = posicao.imagem;
    div.appendChild(img);
  }
>>>>>>> f867572238c8dcffe2dd99a7c17641c882d5fba1
}