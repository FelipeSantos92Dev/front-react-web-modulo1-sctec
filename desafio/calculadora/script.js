/**
 * 1 - Capturar os cliques dos botoes
 * 2 - Realizar as somas
 * 3 - Mudar o texto quando tiver o resultado
 */

const resultado = document.getElementById('valorConta')

function soma(a, b) {
    resultado.textContent = 'Resultado: ' + (a + b)
}