function funcionarOuNao( valor,chanceErro){
    return new Promise(
        (resolve, reject)=>{
            if (Math.random()<chanceErro){
                reject('Ocorreu um Erro')        
            } else {
                resolve (valor)
            }
    })
}

funcionarOuNao('testando..', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch (err => console.log (`Erro: ${err}`))
    .then (()=> console.log (('fim')))