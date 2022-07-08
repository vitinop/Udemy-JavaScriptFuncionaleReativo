const carrinho = [{
    nome: 'Caneta',
    qtde: 10,
    preco: 7.99
},
{
    nome: 'Impressora',
    qtde: 0,
    preco: 649.50
},
{
    nome: 'Caderno',
    qtde: 4,
    preco: 27.10
},
{
    nome: 'Lapis',
    qtde: 3,
    preco: 5.82
},
{
    nome: 'Tesoura',
    qtde: 1,
    preco: 19.20
},
]
//Reduce basicamente reduz um array de valores em um array menor de acordo com 
// a regra da estrutura do reduce, que é arrayexemplo.reduce(fn,vi) 
// onde fn é a função construtora e vi é o valor inicial do acumulador dessa função
const getTotalValor = (item) => item.qtde * item.preco
const somarTotal= (acumulador,numero) =>{ 
    console.log(acumulador,numero)
    return acumulador+numero
}

const totalGeral = carrinho
.map(getTotalValor)
.reduce(somarTotal,0) //onde 0 é o valor inicial do acumulador
console.log(totalGeral)