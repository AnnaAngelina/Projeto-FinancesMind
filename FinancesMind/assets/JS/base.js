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

function openButton() {
    let containerButtons = document.querySelector('.buttons')
    let floatButton = document.getElementById('float-button')
    let addTransiction = document.getElementById('add-transaction')
    let content = document.querySelector('.content')

    containerButtons.classList.remove('buttons')
    containerButtons.classList.add('open')
    addTransiction.id = 'open-buttons'

    content.addEventListener('click', (e) => {
        console.log('oii')
        console.log(e.target)
        if (containerButtons.getAttribute('class') === 'open' && e.target !== floatButton) {
            containerButtons.classList.remove('open')
            containerButtons.classList.add('buttons')
            addTransiction.id = 'add-transaction'
        }
    })

    addTransiction.addEventListener('click', () => {
        console.log('olaaaa')
        if (containerButtons.id === 'open') {
            containerButtons.classList.remove('open')
            containerButtons.classList.add('buttons')
            addTransiction.id = 'add-transaction'
        } else {
            containerButtons.classList.remove('buttons')
            containerButtons.classList.add('open')
            addTransiction.id = 'open-buttons'
        }
    })

}


