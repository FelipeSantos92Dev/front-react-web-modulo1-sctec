// const containerDiv = document.getElementById('container')

// const subtitulo = document.createElement('h2')
// const paragraph = document.createElement('p')
// subtitulo.textContent = 'Criando elementos com JavaScript'
// paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.'


// const div = document.createElement('div')
// div.createElement('h3').textContent = 'Subtítulo dentro da div'
// div.createElement('p').textContent = 'Parágrafo dentro da div'



// containerDiv.appendChild(subtitulo)
// containerDiv.appendChild(paragraph)

const minhaLista = document.getElementById('minhaLista')

const tarefas = ["tarefa1", "tarefa2", "tarefa3"]
tarefas.forEach(tarefa => {
    const item = document.createElement('li')
    item.textContent = tarefa
    minhaLista.appendChild(item)
})

const bicicletas = [
    { marca: 'Trek', preco: 'R$ 4999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" },
    { marca: 'Specialized', preco: 'R$ 8999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" },
    { marca: 'Cannondale', preco: 'R$ 6999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" },
    { marca: 'Specialized', preco: 'R$ 8999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" },
    { marca: 'Cannondale', preco: 'R$ 6999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" },
    { marca: 'Specialized', preco: 'R$ 8999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" },
    { marca: 'Cannondale', preco: 'R$ 6999', img: "https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg" }
]

const mostruario = document.getElementById('mostruario')

bicicletas.forEach(bicicleta => {
    mostruario.innerHTML += `
    <div class="bike">
        <img class="foto-bike" src="${bicicleta.img}"
             alt="${bicicleta.marca}">
        <p class="nome-bike">${bicicleta.marca}</p>
        <p class="preco-bike">${bicicleta.preco}</p>
    </div>
    `
})
