function verificarIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve('Maior de idade')
        } else {
            reject('Menor de idade')
        }
    })
}

verificarIdade(20)
    .then(resultado => console.log('Resultado: ' + resultado))
    .catch(erro => console.log('Erro: ' + erro))
// console.log(
//     verificarIdade(20)
// )