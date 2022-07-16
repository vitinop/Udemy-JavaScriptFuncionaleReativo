// Gerar um numero entre um intervalo de dois numeros
function gerarNumeros(min,max){
    if(min>max){
        //destructuring assignment 
        // destructuring - Array
        [max,min] = [min,max]
        
    }
    return new Promise ( resolve =>{
        const randomNum = parseInt(Math.random()*(max -min +1) + min)
        resolve(randomNum)
    })
}

gerarNumeros(1, 60)
.then(num => num*10)
.then(numX10 => `o numero gerado foi multiplacdo por 10 é : ${numX10}`)
.then (console.log)