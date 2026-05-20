// Exemplo de tentativas a cada 1s com limite de 10 tentativas.
let tentativas = 0

const intervalo = setInterval(() => {
    tentativas++

    console.log('Verificando... tentativa ' + tentativas)
    if (tentativas >= 10) {
        clearInterval(intervalo)
        console.log('Parando as tentativas')
    }
}, 1000)

