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
const fecharHistorico = document.querySelector(".fechar-historico");

const textoHistorico = document.querySelector(".texto-historico");

const dataRegistroElemento = document.querySelector(".data-registro");
const dataHistoricoElemento = document.querySelector(".data-historico");

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
  "2026-01-05": { texto: "Dia feliz 😊" },
  "2026-01-10": { texto: "Dia cansativo 😴" }
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

    const temRegistro = registros[dataCompleta] ? "com-registro" : "sem-registro";

    const ehHoje =
        dia === diaHoje &&
        mesAtual === mesHoje &&
        anoAtual === anoHoje
        ? "hoje"
        : "";

    listaDias += `
        <li class="${temRegistro} ${ehHoje}" data-data="${dataCompleta}">
        ${dia}
        </li>`;
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

  dataHistoricoElemento.innerText = formatarData(data);
  textoHistorico.innerText = registros[data].texto;
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
