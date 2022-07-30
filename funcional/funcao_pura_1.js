  // Uma funcao pura e uma funcao em que o valor 
// de retorno é determinado APENAS por seus valoes
// de entrada, sem enfeitos colaterais observaveis

const PI = 3.14

//funcao impura = Pi é um valor externo!
function areaCirc(raio){
    return raio * raio * Math.PI // estável 
}

console.log(areaCirc(10))
console.log(areaCirc(10))


//Pura, Pi é um valor interno!!
function areaCircPura(raio, pi){
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))