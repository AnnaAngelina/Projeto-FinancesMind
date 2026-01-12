// seleciona elementos
const diasElemento = document.querySelector(".dias"),
dataAtualElemento = document.querySelector(".data_atual"),
iconesAnteriorProximo = document.querySelectorAll(".icones span");

// Obtendo nova data, ano e mês atuais
let data = new Date(),
anoAtual = data.getFullYear(),
mesAtual = data.getMonth();

// nomes completos dos meses
const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const renderizarCalendario = () => {
    let primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay(), //dias do mes anterior
        ultimoDiaDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate(), //quantos dias o mês atual tem
        ultimoDiaDaSemanaDoMes = new Date(anoAtual, mesAtual, ultimoDiaDoMes).getDay(), //qual dia da semana termina o mês
        ultimoDiaDoMesAnterior = new Date(anoAtual, mesAtual, 0).getDate(); //quantos dias teve o mês anterior

    let listaDias = "";

    // Dias do mês anterior - Preenche os primeiros espaços do calendário
    for (let i = primeiroDiaDoMes; i > 0; i--) {
        listaDias += `<li class="inactive">${ultimoDiaDoMesAnterior - i + 1}</li>`;
    }

    // Dias do mês atual
    for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
        let ehHoje = //destacar o dia de hoje no calendário
            dia === data.getDate() &&
            mesAtual === new Date().getMonth() &&
            anoAtual === new Date().getFullYear()
                ? "active"
                : "";

        listaDias += `<li class="${ehHoje}">${dia}</li>`;
    }

    // Dias do próximo mês - Completa a última semana do calendário
    for (let i = ultimoDiaDaSemanaDoMes; i < 6; i++) {
        listaDias += `<li class="inactive">${i - ultimoDiaDaSemanaDoMes + 1}</li>`;
    }

    dataAtualElemento.innerText = `${meses[mesAtual]} ${anoAtual}`;
    diasElemento.innerHTML = listaDias;
};

renderizarCalendario();

// Navegação entre meses
iconesAnteriorProximo.forEach(icone => {
    icone.addEventListener("click", () => { //Adiciona um evento de clique a cada ícone
        mesAtual = icone.id === "prev" ? mesAtual - 1 : mesAtual + 1;

        if (mesAtual < 0 || mesAtual > 11) {
            data = new Date(anoAtual, mesAtual, new Date().getDate());
            anoAtual = data.getFullYear();
            mesAtual = data.getMonth();
        } else {
            data = new Date();
        }

        renderizarCalendario();
    });
});