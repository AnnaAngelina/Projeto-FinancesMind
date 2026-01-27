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
        if (filtro.getAttribute('class') == 'active') {
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

// ---------------- DIARIO JS --------------------------------------------------------------------------------------------

// ====================
// SELEÇÃO DE ELEMENTOS
// ====================
const diasElemento = document.querySelector(".dias");
const dataAtualElemento = document.querySelector(".data_atual");
const iconesAnteriorProximo = document.querySelectorAll(".icones span");

const btnRegistrar = document.querySelector(".btn-registrar");
const registroLateral = document.querySelector(".registro-lateral");
const historicoLateral = document.querySelector(".historico-lateral");
const fecharRegistro = document.querySelector(".fechar-registro");
const dataRegistroElemento = document.querySelector(".data-registro");

const fecharHistorico = document.querySelector(".fechar-historico");
const textoHistorico = document.querySelector(".texto-historico");
const dataHistoricoElemento = document.querySelector(".data-historico");
const emojiHistorico = document.querySelector(".emoji-historico");
const textoHumor = document.querySelector(".texto-humor");

const hoje = new Date();
const diaHoje = hoje.getDate();
const mesHoje = hoje.getMonth();
const anoHoje = hoje.getFullYear();

// ====================
// DATA ATUAL
// ====================
let data = new Date();
let anoAtual = data.getFullYear();
let mesAtual = data.getMonth();
let dataSelecionada = null; // ← GUARDA O DIA CLICADO

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// ====================
// REGISTROS (exemplo)
// ====================
const registros = {
  "2026-01-05": {
    texto: "Neste dia me senti triste pois eu não consegui realizar minhas atividades básicas por falta de motivação",
    emoji: "/FinancesMind/img/Triste.png",
    humor: "triste"
  },
  "2026-01-10": {
    texto: "Neste dia me senti animada pois vou sair com meus amigos",
    emoji: "/FinancesMind/img/Feliz.png",
    humor: "feliz"
  }
};

// ====================
// RENDERIZAR CALENDÁRIO
// ====================
function renderizarCalendario() {
  const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
  const ultimoDiaMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const ultimoDiaSemana = new Date(anoAtual, mesAtual, ultimoDiaMes).getDay();
  const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();

  

  let listaDias = "";

  // Dias do mês anterior
  for (let i = primeiroDia; i > 0; i--) {
    listaDias += `<li class="inactive">${ultimoDiaMesAnterior - i + 1}</li>`;
  }

  // Dias do mês atual
    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
    const dataCompleta = `${anoAtual}-${String(mesAtual + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

    const registro = registros[dataCompleta];

    const temRegistro = registro ? "com-registro" : "sem-registro";

    const ehHoje =
        dia === diaHoje &&
        mesAtual === mesHoje &&
        anoAtual === anoHoje
        ? "hoje"
        : "";

    const emoji = registro
    ? `<img src="${registro.emoji}" alt="${registro.humor}" class="emoji-dia">`
    : "";

    listaDias += `
        <li class="${temRegistro} ${ehHoje}" data-data="${dataCompleta}">
        <span class="numero-dia">${dia}</span>
        ${emoji}
        </li>
    `;
    }


  // Dias do próximo mês
  for (let i = ultimoDiaSemana; i < 6; i++) {
    listaDias += `<li class="inactive">${i - ultimoDiaSemana + 1}</li>`;
  }

  dataAtualElemento.innerText = `${meses[mesAtual]} ${anoAtual}`;
  diasElemento.innerHTML = listaDias;
}

renderizarCalendario();

// ====================
// NAVEGAÇÃO DE MESES
// ====================
iconesAnteriorProximo.forEach(icone => {
  icone.addEventListener("click", () => {
    mesAtual = icone.id === "prev" ? mesAtual - 1 : mesAtual + 1;

    if (mesAtual < 0 || mesAtual > 11) {
      data = new Date(anoAtual, mesAtual);
      anoAtual = data.getFullYear();
      mesAtual = data.getMonth();
    }

    renderizarCalendario();
  });
});

// ====================
// FUNÇÕES DE TELAS
// ====================

function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia} de ${meses[Number(mes) - 1]} de ${ano}`;
}

function abrirRegistro(data) {
  historicoLateral.classList.remove("aberto");
  registroLateral.classList.add("aberto");

  dataRegistroElemento.innerText = formatarData(data);
}

function abrirHistorico(data) {
  registroLateral.classList.remove("aberto");
  historicoLateral.classList.add("aberto");

  const registro = registros[data];

  dataHistoricoElemento.innerText = formatarData(data);
  textoHistorico.innerText = registro.texto;

  if (registro.emoji && registro.humor) {
    emojiHistorico.src = registro.emoji;
    emojiHistorico.alt = registro.humor;
    textoHumor.innerText = registro.humor;

    emojiHistorico.style.display = "inline-block";
    textoHumor.style.display = "inline-block";
  } else {
    emojiHistorico.style.display = "none";
    textoHumor.style.display = "none";
  }
}




// ====================
// CLICK NOS DIAS
// ====================
diasElemento.addEventListener("click", (event) => {
  const dia = event.target;

  if (dia.tagName !== "LI" || dia.classList.contains("inactive")) return;

  const data = dia.dataset.data;

  if (registros[data]) {
    abrirHistorico(data); //  dia com registro
  } else {
    abrirRegistro(data); //  dia sem registro
  }
});

// ====================
// BOTÕES
// ====================
btnRegistrar.addEventListener("click", () => {
  if (!dataSelecionada) {
    const hoje = new Date();
    dataSelecionada = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;
  }

  abrirRegistro(dataSelecionada);
});

fecharRegistro.addEventListener("click", () => {
  registroLateral.classList.remove("aberto");
});

fecharHistorico.addEventListener("click", () => {
  historicoLateral.classList.remove("aberto");
});

