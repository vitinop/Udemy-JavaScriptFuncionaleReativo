const path = require('path')
const fn = require("./funcoes.js")
const caminho = path.join(__dirname, 'dados', 'legendas')

const simbolos = [
  '.','!', '?', '-', ',', '"', '♪',
  '_', '<i>', '</i>', '\r', '[', ']',
  '(', ')', '%'
]


fn.lerPasta(caminho)
  .then(arquivos => fn.elementosTerminados(arquivos, '.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT)) // cria um array com todo conteudo interno
  .then(fn.mesclarElementos) // jutando todo conteudo dos arrays em linhas separadas em um arquivo
  .then(fn.serpararTextoPor('\n')) //quebrando as linhas
  .then(fn.removerElementosSeVazio) //removendo espaços vazios dentro das linhas
  .then(fn.removerElementosSeIncluir('-->', )) // removendo espaço de tempo da lengenda através do parametro -->, comum em espaços de tempo
  .then(fn.removerElementosSeApenasNumero) // remover numeros que definem o numero de cada legenda
  .then(fn.removerSimbolos(simbolos)) // remover simbolos 
  .then(fn.mesclarElementos)
  .then(fn.serpararTextoPor(' '))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordernarPorAtributoNumerico('qtde', 'desc'))
  .then(console.log)