// exemplo callbacks
setTimeout( function(){
    console.log('Executando callback..')
    setTimeout(function (){
        console.log('Executando callback..2')
    },2000)
        setTimeout(function (){
        console.log('Executando callback..3')
        },2000)

},2000)


function esperarPor(tempo =3000){
    return new Promise (function(resolve){
        setTimeout(function(){
            console.log('Executando a promise')
            resolve()
        },tempo)
    })

}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor) 