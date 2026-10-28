let numeroSecreto;
let tentativasMaximas = 10;
let tentativasRestantes;

// Elementos do Html
const inputPalpite = document.getElementById('palpite'); // Nome corretoizado aqui
const botaoChutar = document.getElementById('btChutar');
const txtMensagem = document.getElementById('mensagemJogo');
const txtTentativas = document.getElementById('tentativasRestantes');

// rodando o jogo
function iniciarJogo() {
    // numeros aleatórios
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = tentativasMaximas;

    // atualiza a tela
    txtTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    txtMensagem.textContent = "Boa sorte!";
    inputPalpite.value = ''; // Corrigido para inputPalpite
    inputPalpite.disabled = false; // Corrigido para inputPalpite
    botaoChutar.disabled = false;
}

// função para o botão
function verificarPalpite() {
    const palpite = parseInt(inputPalpite.value); // Corrigido para inputPalpite

    // verificação de palpite
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        txtMensagem.style.color = "red";
        txtMensagem.textContent = "Por favor insira um número válido entre 1 e 100!";
        return;
    }
    
    // contador de tentativas
    tentativasRestantes--;
    txtTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Comparação do palpite
    if (palpite === numeroSecreto) {
        txtMensagem.style.color = "green";
        txtMensagem.textContent = "Parabéns! Você acertou!"; // Adicionado para dar feedback de vitória
        finalizarJogo();
    } else if (tentativasRestantes === 0) {
        txtMensagem.style.color = "red";
        txtMensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        finalizarJogo();
    } else {
        txtMensagem.style.color = "orange";

        // dicas (Sua lógica aqui ficou perfeita!)
        if (palpite < numeroSecreto) {
            txtMensagem.textContent = "O número é maior";
        } else {
            txtMensagem.textContent = "O número é menor";
        }
    }
    
    // Limpa campo
    inputPalpite.value = ''; // Corrigido para inputPalpite
    inputPalpite.focus(); // Corrigido para inputPalpite
} // <--- CHAVE FECHADA AQUI! Agora a função verificarPalpite termina corretamente.

// finaliza jogo (Agora está no escopo global correto)
function finalizarJogo() {
    inputPalpite.disabled = true; // Corrigido para inputPalpite
    botaoChutar.disabled = true;
}

// Configurações de eventos (Fora das funções)
botaoChutar.addEventListener('click', verificarPalpite);

// recarregando a página
window.onload = iniciarJogo;

