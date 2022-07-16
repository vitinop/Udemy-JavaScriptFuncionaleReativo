const fs = require("fs")
const path = require("path")

function lerPasta(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
      resolve(arquivos)
    } catch (err) {
      reject(err)
    }
  })
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, {
        encoding: "utf-8"
      })
      resolve(conteudo.toString());
    } catch (err) {
      reject(err);
    }
  })
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}


function elementosTerminados(array, padraoExtensao) {
  return array.filter(el => el.endsWith(padraoExtensao))
}

function mesclarElementos(array) {
  return array.join(' ')
}
function serpararTextoPor(simbolo){
  return function (texto){
    return texto.split(simbolo)
  }
}

function removerElementosSeVazio(array) {
  return array.filter(elemento => elemento.trim())
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter(el => !el.includes(padraoTextual))
  }
}


function removerElementosSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim())
    return (num !== num)
  })
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map(el => {
      let textoSemSimbolos = el
      simbolos.forEach(simbolo => {
        textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
      })
      return textoSemSimbolos
    })
  }
}
function agruparElementos(palavras) {
  return Object.values(palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase()
      const qtde = acc[el] ? acc[el].qtde + 1 : 1
      acc[el] = { elemento: el, qtde }
      return acc
  }, {}))
}

function ordernarPorAtributoNumerico(atributo, ordem ='asc'){
  return function (array) {
    const asc = ( o1,o2) => o1[atributo] - o2[atributo]
    const desc = ( o1,o2) => o2[atributo] - o1[atributo]
    return array.sort(ordem === 'asc' ? asc : desc)
  }  
}

module.exports = {
  lerPasta,
  lerArquivo,
  lerArquivos,
  elementosTerminados,
  mesclarElementos,
  serpararTextoPor,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  agruparElementos,
  ordernarPorAtributoNumerico
}