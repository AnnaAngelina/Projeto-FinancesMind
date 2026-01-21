let menu = document.querySelector('.menu-symbol')
let nav = document.querySelector('.nav-hidden')
let smallScreen = document.querySelector('.small-screen')
let close = document.querySelector('.close')

menu.addEventListener('click', () => {
    if (nav.getAttribute('class') == 'nav-hidden') {
        console.log('oi')
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

let containerButtons = document.getElementById('buttons')
let floatButton = document.getElementById('float-button')
let addTransiction = document.getElementById('add-transaction')
console.log('oi', addTransiction)

addTransiction.addEventListener('click', () => {
    console.log('oi')
    if (containerButtons.id === 'open') {
        containerButtons.id = 'buttons'
        addTransiction.id = 'add-transaction'
    } else {
        containerButtons.id == 'open'
        addTransiction.id = 'open-buttons'
    }
})