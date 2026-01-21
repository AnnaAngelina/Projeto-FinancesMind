let button = document.getElementById('filter')
let filtro = document.querySelector('.filter-up')
let num = 0

function filterModal() {
    const closeFilter = document.querySelector('.close-filter')
    const content = document.getElementById('content')

    filtro.classList.add('active')
    filtro.classList.remove('filter-up')

    content.addEventListener('click', (e) => {
        if (content.contains(e.target) && filtro.getAttribute('class') == 'active') {
            console.log('ola')
            filtro.classList.remove('active')
            filtro.classList.add('filter-up')
        }
        e.stopImmediatePropagation()
    })

    closeFilter.addEventListener('click', (e) => {
        console.log('oi')
        if (filtro.getAttribute('class') == 'active') {
            console.log('oiiiii')
            filtro.classList.remove('active')
            filtro.classList.add('filter-up')

        } else {
            filtro.classList.add('active')
            filtro.classList.remove('filter-up')
        }
        e.stopImmediatePropagation()
    })
}

let periodoInicio = document.querySelector('.inicio')
let periodoFim = document.querySelector('.fim')
let periodo = document.getElementById('periodo-date')
let p1 = 0
let p2 = 0

periodoInicio.addEventListener('blur', () => {
    if (periodoInicio.value) {
        periodo.classList.remove('periodo-active1')
        p1 = 1
    } else {
        if (p1===1) {
            periodo.classList.add('periodo-active1')
        }
    }
})

periodoFim.addEventListener('blur', () => {
    if (periodoFim.value) {
        periodo.classList.remove('periodo-active2')
        p2 = 1
    } else {
        if (p2===1) {
            periodo.classList.add('periodo-active2')
        }
    }
})


// ---------------- base JS -------------------------

// nav e header

let menu = document.querySelector('.menu-symbol')
let nav = document.querySelector('.nav-hidden')
let smallScreen = document.querySelector('.small-screen')
let close = document.querySelector('.close')

menu.addEventListener('click', () => {
    if (nav.getAttribute('class') == 'nav-hidden') {
        nav.classList.add('nav-active')
        nav.classList.remove('nav-hidden')
    } else {
        nav.classList.remove('nav-active')
        nav.classList.add('nav-hidden')
    }

})

close.addEventListener('click', () => {
    if (nav.getAttribute('class') == 'nav-active') {
        nav.classList.remove('nav-active')
        nav.classList.add('nav-hidden')
    }

})

// botao flutuante

let containerButtons = document.querySelector('.buttons')
let addTransiction = document.getElementById('add-transaction')
console.log(containerButtons)

addTransiction.addEventListener('click', () => {
    if (containerButtons.getAttribute('class') == 'open') {
        containerButtons.classList.toggle = 'buttons'
        addTransiction.id = 'add-transaction'
    } else {
        containerButtons.classList.toggle = 'open'
        addTransiction.id = 'open-buttons'
    }
})



