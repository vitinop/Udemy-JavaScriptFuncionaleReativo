function exec(fn,n1,n2){
    return fn(n1,n2)
}

const somarNoTerminal= (x,y) => console.log(x+y)
const subtrairNoTerminal= (x,y) => console.log(x-y)
// as funções de operações então sendo chamadas através de call back 
// para serem parametros de  exec, assumindo a posição de FN no escopo da função

exec(somarNoTerminal, 56,38)
exec(subtrairNoTerminal, 182,27)

// set interval é um looping de uma função com dois parametros
// a propria função e o tempo de reexecuta-la
const funcaoAmostra = () => console.log("estou executando")
setInterval(funcaoAmostra,1000)