const carrinho = [{
        nome: 'Caneta',
        quantidade: 10,
        preco: 7.99
    },
    {
        nome: 'Impressora',
        quantidade: 0,
        preco: 799.99
    },
    {
        nome: 'Lápis',
        quantidade: 3,
        preco: 2.40
    },
    {
        nome: 'Tesoura',
        quantidade: 1,
        preco: 5.99
    },
    {
        nome: 'Caderno',
        quantidade: 5,
        preco: 12.99
    },
]
// filter é usado na estrutra de um arrayExemplo.filter(fn) , 
// onde fn é a função que determina a criação do novo arrau de filtro 
const getNome = (item) => item.nome
const qntMaiorQueZero = (item) => item.quantidade > 0

const itensValidos = carrinho.filter(qntMaiorQueZero)
.map(getNome)
console.log(itensValidos)


//criando filtro costumizado
Array.prototype.meuFilter= function(fn){
    const novoArray =[]
    for (let i=0; i<this.length; i++){
        if (fn(this[i],i,this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}


const itensValidos2 = carrinho.meuFilter(qntMaiorQueZero)
.map(getNome)
console.log(itensValidos2)