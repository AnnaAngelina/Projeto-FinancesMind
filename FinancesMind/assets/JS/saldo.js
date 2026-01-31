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

function validarESeguir(event) {
    event.preventDefault();
    
    const saldo = document.getElementById('saldo').value.trim();
    
    // Validar se o campo não está vazio
    if (!saldo || saldo === '') {
        alert('Por favor, insira seu saldo bancário');
        return false;
    }
    
    // Se passou na validação, navegar para a próxima página
    window.location.href = './renda_inf.html';
}