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