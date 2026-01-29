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

