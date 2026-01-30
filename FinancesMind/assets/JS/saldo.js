function inserirSaldo() {
    const saldo =  document.getElementById('saldo')

    saldo.addEventListener('input', (e) => {
        let valor = e.target.value

        valor = valor.replace(/\D/g, '')
        valor = (Number(valor / 100)).toFixed(2)
        valor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor);

        e.target.value = valor
    })
}