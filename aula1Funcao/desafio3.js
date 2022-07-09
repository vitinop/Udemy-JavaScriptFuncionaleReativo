const { clear } = require('console');
const fs = require ('fs');
const path = require ('path')

const caminho = path.join (__dirname,'dados.txt')
function exibirConteudo (_, conteudo){
    console.log(conteudo.toString())
}
console.log ('Inicio do aSync...')
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, {}, (_,conteudo) => console.log(conteudo.toString()))
console.log ('Fim do aSync...')

console.log ('Inicio do Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log ('Fim do Sync...')

// criar esse mesmo metodo acima usando promises