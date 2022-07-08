function bomDia() {
    console.log('Bom dia!!!')
}

const boaTarde = function () {
    console.log('Boa Tarde!!!')
}

//passamos uma função como parans para outra função
function executarAlgo(fn) {
    if (typeof fn === 'function') {
        fn()
    }

}

// executarAlgo(3)
executarAlgo(bomDia)
executarAlgo(boaTarde)

// 2- Retornar uma função a partir de outra

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const potenciaDeAlgo = potencia (3) (4)
console.log(potenciaDeAlgo)