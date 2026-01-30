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


function EditPreco() {
    const inputDinheiro = document.getElementById('valor-dinheiro');


    inputDinheiro.addEventListener('input', function(e) {
        let valor = e.target.value;

        valor = valor.replace(/\D/g, '');

        valor = (Number(valor) / 100).toFixed(2);
        
        valor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor);

        e.target.value = valor;
    });

}


function configurarDataOutro() {

    const radioOutro = document.getElementById('outro');
    const datePicker = document.getElementById('datePicker');
    const textoOutro = document.getElementById('texto-outro');
    
    radioOutro.addEventListener('change', () => {
        if (radioOutro.checked) {
            datePicker.showPicker();
        }
    });

    datePicker.addEventListener('change', () => {
        const data = datePicker.value;
        if (!data) return;

        const dataFormatada = new Date(data).toLocaleDateString('pt-BR');

        textoOutro.textContent = dataFormatada;
        radioOutro.checked = true;
    });
}
configurarDataOutro();