//função map é aplicada em cima de array de elementos

const nums = [1, 2, 3, 4, 5]
const dobro = (n) => n * 2

//dobro está sendo um callback dentro da função map
console.log(nums.map(dobro))

const nomes = ['Ana', 'Victor', 'Matheus', 'Vivi']
const primeiraLetra = texto => texto[0]
const letras = (nomes.map(primeiraLetra))
console.log(nomes, letras)

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
const getNomesCarrinho = item => item.nome
console.log(`Itens do Carrinhos : ${carrinho.map(getNomesCarrinho)}`)


const getTotalCarrinho = item => item.quantidade * item.preco
const totais = carrinho.map(getTotalCarrinho)

console.log(`Itens do Carrinhos : ${totais}`)

Array.prototype.meuMap = function (fn) {
    const novoArray = []

    for (let i = 0; i < this.length; i++) {

        const resultado = fn(this[i], i, this)
        novoArray.push()
    }
    return novoArray
}

