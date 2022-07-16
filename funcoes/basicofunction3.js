//arrow function

const primeiraArrow = () => console.log('Primeira Arrow Function')
primeiraArrow()

//Função anonima simples - arrow function
const saudacao = (nome) => `Fala ${nome}, tudo bem ?`

console.log(saudacao('Victor'))

const somar = (...numeros) => {

    let total = 0
    for (let n of numeros) {
        total = n + total
    }
    return total
}
console.log(`A soma é: ${somar(1, 2, 3)}`)

const subtrair =(a,b) => a-b

console.log(`A subtração é : ${subtrair(4,3)}`)

// const potencia = (base) =>{
//     return (exp) =>{
//         return Math.pow(base,exp)
//     }
// }  
// é igual ao exemploa baixo

const potencia = (base) => (exp) => Math.pow(base, exp)
console.log(`A potencia é: ${potencia(2)(10)}`)

//this
Array.prototype.log = function () {
    console.log(this)
}

Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 3, 600]
numeros.log()
numeros.ultimo()