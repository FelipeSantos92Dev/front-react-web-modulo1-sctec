function criarCalculoImposto(taxa) {
    return function (valor) {
        return valor + (valor * taxa / 100)
    }
}

const impostoSP = criarCalculoImposto(7)
const impostoSC = criarCalculoImposto(4)

console.log(
    impostoSP(500) 
)












// function calcularImposto(taxa, valor) {
//     return valor + (valor * taxa / 100)
// }

// const impostoSP = calcularImposto(7, 500) // 535
// const impostoSP2 = calcularImposto(7, 1000) 