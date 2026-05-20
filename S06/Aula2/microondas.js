function esquentarComida(timerMS) {
    console.log('Esquentando comida por ' + timerMS + 'ms')

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Comida pronta!')
        }, timerMS)
    })

}

console.log('Colocando comida no microondas')

esquentarComida(5000)
    .then(resultado => console.log(resultado))