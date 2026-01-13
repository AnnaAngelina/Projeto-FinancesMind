/* ===============================
   SELEÇÃO DE ELEMENTOS
================================ */
const diasElemento = document.querySelector(".dias");
const dataAtualElemento = document.querySelector(".data_atual");
const iconesAnteriorProximo = document.querySelectorAll(".icones span");

const btnRegistrar = document.querySelector(".btn-registrar");
const registroLateral = document.querySelector(".registro-lateral");
const historicoLateral = document.querySelector(".historico-lateral");
const fecharRegistro = document.querySelector(".fechar-registro");
const textoHistorico = document.querySelector(".texto-historico");


/* ===============================
   ESTADO DO CALENDÁRIO
================================ */
let data = new Date();
let anoAtual = data.getFullYear();
let mesAtual = data.getMonth();

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];


/* ===============================
   REGISTROS (SIMULAÇÃO)
================================ */
const registros = {
  "2026-01-05": { texto: "Dia feliz 😊" },
  "2026-01-10": { texto: "Dia cansativo 😴" }
};


/* ===============================
   FUNÇÕES DO CALENDÁRIO
================================ */
function renderizarCalendario() {
  const primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay();
  const ultimoDiaDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const ultimoDiaSemanaMes = new Date(anoAtual, mesAtual, ultimoDiaDoMes).getDay();
  const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();

  let listaDias = "";

  // Dias do mês anterior
  for (let i = primeiroDiaDoMes; i > 0; i--) {
    listaDias += `<li class="inactive">${ultimoDiaMesAnterior - i + 1}</li>`;
  }

  // Dias do mês atual
  for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
    const dataCompleta = `${anoAtual}-${String(mesAtual + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const classe = registros[dataCompleta] ? "com-registro" : "sem-registro";

    listaDias += `
      <li class="${classe}" data-data="${dataCompleta}">
        ${dia}
      </li>
    `;
  }

  // Dias do próximo mês
  for (let i = ultimoDiaSemanaMes; i < 6; i++) {
    listaDias += `<li class="inactive">${i - ultimoDiaSemanaMes + 1}</li>`;
  }

  dataAtualElemento.innerText = `${meses[mesAtual]} ${anoAtual}`;
  diasElemento.innerHTML = listaDias;
}


/* ===============================
   NAVEGAÇÃO ENTRE MESES
================================ */
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


/* ===============================
   PAINÉIS LATERAIS
================================ */
function abrirRegistro() {
  historicoLateral.classList.remove("aberto");
  registroLateral.classList.add("aberto");
}

function abrirHistorico(data) {
  registroLateral.classList.remove("aberto");
  historicoLateral.classList.add("aberto");
  textoHistorico.innerText = registros[data].texto;
}


/* ===============================
   EVENTOS
================================ */
btnRegistrar.addEventListener("click", abrirRegistro);

fecharRegistro.addEventListener("click", () => {
  registroLateral.classList.remove("aberto");
});

diasElemento.addEventListener("click", (event) => {
  const dia = event.target;

  if (dia.tagName !== "LI" || dia.classList.contains("inactive")) return;

  const dataSelecionada = dia.dataset.data;

  if (registros[dataSelecionada]) {
    abrirHistorico(dataSelecionada);
  } else {
    abrirRegistro();
  }
});


/* ===============================
   INICIALIZAÇÃO
================================ */
renderizarCalendario();
