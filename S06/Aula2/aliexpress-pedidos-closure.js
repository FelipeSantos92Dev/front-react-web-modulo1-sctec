// CASO ALIEXPRESS
const pedidos = []

// taxa das blusinhas
function criarCalculoImposto(taxaGovFederal, taxaGovEstadual) {
    return function (valor) {
        return valor + (valor * taxaGovFederal / 100) + (valor * taxaGovEstadual / 100)
    }
}


const calcularImpostoSC = criarCalculoImposto(10, 17)
const calcularImpostoRJ = criarCalculoImposto(10, 12)

calcularImpostoSC(1500)
calcularImpostoRJ(1500)