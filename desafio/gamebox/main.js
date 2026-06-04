// Crie uma caixa vermelha na tela OK
// Permita que o usuário mova essa caixa usando as setas do teclado.
// Quando uma tecla for pressionada, mostre na tela o nome da tecla apertada. OK


// A caixa deve andar 10 pixels por vez para cima, para baixo, para a esquerda ou para a direita.
// Seta para a direita: move a caixa para a direita
// Seta para a esquerda: move a caixa para a esquerda
// Seta para a esquerda: move a caixa para a esquerda 
// Seta para a esquerda: move a caixa para a esquerda
// Use addEventListener, o evento keydown, event.key e altere as propriedades style.left e style.top da caixa.

const display = document.getElementById('tecla')
const box = document.getElementById('box')

let posX = 0
let posY = 0

document.addEventListener('keydown', (event) => {
    const code = event.code
    display.textContent = `Tecla pressionada: ${code}`

    if (code === "ArrowRight") {
        posX += 10
    }

    if (code === "ArrowLeft") {
        posX -= 10
    }

    if (code === "ArrowUp") {
        posY -= 10
    }

    if (code === "ArrowDown") {
        posY += 10
    }

    box.style.marginLeft = posX + 'px'
    box.style.marginTop = posY + 'px'
})

