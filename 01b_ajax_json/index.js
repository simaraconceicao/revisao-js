// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response
// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const url = './data.dados.json'
const req = new XMLHttpRequest()
req.open('GET', url)
req.send()

req.onreadystatechange = pegarDados
function pegarDados () {
    const response = req.response
    const json = JSON.parse(response)
    console.log(json)
    
}