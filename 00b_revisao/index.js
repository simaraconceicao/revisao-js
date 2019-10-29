// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
<<<<<<< HEAD
// [] template string

console.log("estou lendo")
const body = document.body
console.log(body)

const botao = document.getElementById("trocaCor")

const n = Math.random()
const n2 = n*255
const int = parseInt(n2)
console.log(int)

geraInteiro = num => parseInt(Math.random() * num)


botao.addEventListener("click", () =>{
    const r = geraInteiro(255)
    const g = geraInteiro(255)
    const b = geraInteiro(255)
 
    body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' +  b+')'
    
    console.log(r, g, b)    
})
=======
// [x] template string

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener('click', () => {
  const r = geraInteiro(255);
  const g = geraInteiro(255);
  const b = geraInteiro(255);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

geraInteiro = num => parseInt(Math.random() * num);
>>>>>>> 6cbe0f82e22012a3db1c90d3e3a40f969af0987f
