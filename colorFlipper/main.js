let background = document.getElementById('body')
let sayColor = document.getElementById('italic')
let button = document.getElementById('buttonRand')


let colores = [
    'red', 'green', 'purple', 'blue', 'rgb(323, 333, 132)', 'rgb(23, 133, 12)', 'rgb(323, 333, 132)',
    'rgb(100, 25, 132)', 'rgb(23, 13, 2)', 'rgb(197, 43, 119)', 'rgb(88, 98, 177)', 'rgb(39, 99, 24)',
    'rgb(177, 178, 17)', 'rgb(248, 18, 237)', 'rgb(253, 8, 7)', 'rgb(207, 9, 90)', 'rgb(149, 18, 220)',
    'rgb(30, 30, 155)', 'rgb(222, 122, 217)', 'rgb(188, 198, 27)', 'rgb(77, 18, 29)'
]

    button.addEventListener('click', () => {
        let random = Math.floor(Math.random() * (10 - 0 + 1) + 0)
        background.style.backgroundColor = colores[random]
        sayColor.innerHTML=colores[random]
        sayColor.style.color = colores[random]
    })    
