console.log('main.js')

const btnConectar = document.getElementById('btn-conectar')
const btnEsqueciSenha = document.getElementById('btn-esqueci-senha')
const emailInput = document.getElementById('input-email')
const senhaInput = document.getElementById('input-pwd')
const spanMensagem = document.querySelector('#mensagem') 
// // CAPTURAR O VALOR DIGITADO DOS INPUTS
// let email = 'yan@mail.com'
// let senha = '123456'

// const botoes = document.querySelectorAll('button') // Aqui retorna varios itens
{/* <button id="btn-conectar" class="button button-active">Conectar</button> */}

// console.log(btnConectar)
spanMensagem.textContent = ''

/**
 * Quando for apenas texto: usar textContent
 * Quando for HTML: usar innerHTML
 */

btnConectar.addEventListener('click', (event) => {
    console.log('Clicou no botão conectar')
    const email = emailInput.value
    const senha = senhaInput.value
        
    if (email === 'yan@mail.com' && senha === '12345') {
        // spanMensagem.style.color = 'green'
        spanMensagem.classList.remove('text-red')
        spanMensagem.classList.add('text-green')
        spanMensagem.textContent = 'Bem-vindo!'
    } else {
        // spanMensagem.style.color = 'red'
        spanMensagem.classList.remove('text-green')
        spanMensagem.classList.add('text-red')
        spanMensagem.textContent = 'Email ou senha incorretos!'
    }
})

btnEsqueciSenha.addEventListener('click', (event) => {
    console.log('Clicou no botão esqueci a senha')
})

// document.querySelector('body').classList.add('light-mode')
// document.querySelector('body').classList.add('dark-mode')