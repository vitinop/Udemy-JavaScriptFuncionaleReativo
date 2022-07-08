const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];
// filter, map , reduce

// 1.Apenas elementos que tem fragil

const getNome = (item) => item.nome;
const getQuantidade = (item) => item.qtde;
const getPreco = (item) => item.preco;

const verificadorFrageis = (item) => item.fragil === true;

const itensFrageis = carrinho.filter(verificadorFrageis).map(getNome);
console.log(itensFrageis);

// 2. Quantidade e preço de cada item
const precoItens = carrinho.map(getPreco);
const quantidadeItens = carrinho.map(getQuantidade);

console.log(`
Os nomes preços e total são : 
Valor: ${precoItens}
Quantidade: ${quantidadeItens}
`);

// 3. média dos totais
const somarTotal = (acumulador, numero) => {
  return acumulador + numero;
};

let totalValorCarrinho = precoItens.reduce(somarTotal, 0);
let totalItensCarrinho = quantidadeItens.reduce(somarTotal, 0);

let media = (totalValorCarrinho / totalItensCarrinho).toFixed(2);
console.log(`Com base na quantidade de produtos e o valor total de todos itens da compra concluimos que a média aritimética é: ${media}`);
