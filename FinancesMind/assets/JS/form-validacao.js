// ===== VALIDAÇÕES DE FORMULÁRIO =====

// Login
function validarLoginESeguir(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos');
        return false;
    }
    
    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido');
        return false;
    }
    
    window.location.href = './index.html';
}

// Signin
function validarSigninESeguir(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmPassword = document.getElementById('confirm_password').value.trim();
    
    if (!nome || !email || !nascimento || !senha || !confirmPassword) {
        alert('Por favor, preencha todos os campos');
        return false;
    }
    
    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido');
        return false;
    }
    
    if (senha !== confirmPassword) {
        alert('As senhas não coincidem');
        return false;
    }
    
    if (senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres');
        return false;
    }
    
    window.location.href = './emotion_quest01.html';
}

// Renda
function validarRendaESeguir(event) {
    event.preventDefault();
    
    const profissao = document.getElementById('profissão').value.trim();
    const renda = document.getElementById('renda').value.trim();
    const fonteRenda = document.getElementById('fonte-renda').value.trim();
    
    if (!profissao || !renda || !fonteRenda) {
        alert('Por favor, preencha todos os campos');
        return false;
    }
    
    if (isNaN(renda) || renda <= 0) {
        alert('Por favor, insira um valor de renda válido');
        return false;
    }
    
    window.location.href = './index.html';
}

// Emoção Quest 01
function validarEmocao01ESeguir(event) {
    event.preventDefault();
    
    const emocoes = document.querySelectorAll('input[name="emocoes"]:checked');
    
    if (emocoes.length === 0) {
        alert('Por favor, selecione pelo menos uma emoção');
        return false;
    }
    
    window.location.href = './emotion_quest02.html';
}

// Emoção Quest 02
function validarEmocao02ESeguir(event) {
    event.preventDefault();
    
    const frase = document.getElementById('frase').value;
    
    if (!frase) {
        alert('Por favor, selecione uma opção');
        return false;
    }
    
    window.location.href = './saldo.html';
}

// Função auxiliar de validação de email
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
