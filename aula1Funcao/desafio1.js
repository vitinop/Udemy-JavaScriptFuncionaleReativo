// desafio 1 somar (3)(4)(5)
function soma(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}
const somar2numeros = soma(3)(4);
console.log(somar2numeros(13));
console.log(soma(13)(20)(30));

//calcular em divisao , subitração, multimicação e soma (3)(7)(fn)

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}
// Métodos constumizados da função
function subtrair(n1, n2) {
  return n1 - n2;
}

function somar(n1, n2) {
  return n1 + n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}

const r1 = calcular (4)(5)(somar)
const r2 = calcular (4)(5)(subtrair)
const r3 = calcular (4)(5)(dividir)
const r4 = calcular (4)(5)(multiplicar)

console.log(`Resultado da soma é: ${r1}`)
console.log(`Resultado da subtração é: ${r2}`)
console.log(`Resultado da divisão é: ${r3}`)
console.log(`Resultado da multiplicação é: ${r4}`)