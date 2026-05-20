function operacoesMatematicas(a, b, operacao) {
    return operacao(a, b)
}

function soma(a, b) {
    return a + b
}

function multiplicacao(a, b) {
    return a * b
}

console.log(
    operacoesMatematicas(5, 3, soma)
)