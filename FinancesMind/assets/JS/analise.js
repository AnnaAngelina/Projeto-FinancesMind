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

function openButton() {
let containerButtons = document.getElementById('buttons')
let addTransiction = document.querySelector('.add-transaction')
const main = document.getElementById('content')

if (containerButtons.getAttribute('class') === 'open') {
    containerButtons.classList.remove('open')
    containerButtons.classList.add('buttons')
    addTransiction.id = 'add-transaction'
} else {
    containerButtons.classList.remove('buttons')
    containerButtons.classList.add('open')
    addTransiction.id = 'open-buttons'
}


main.addEventListener('click', (e) => {
    console.log(e.target)
    if ((main.contains(e.target) || e.target == main) && addTransiction.id == 'open-buttons') {
    containerButtons.classList.remove('open')
    containerButtons.classList.add('buttons')
    addTransiction.id = 'add-transaction'
    }
})
}
