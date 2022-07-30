function gerarNumAleatorio(min,max){
  const fator = max-min+1
  return parseInt(Math.random()*fator)+min
}
console.log(gerarNumAleatorio(1,10));
console.log(gerarNumAleatorio(1,10));
console.log(gerarNumAleatorio(1,10));