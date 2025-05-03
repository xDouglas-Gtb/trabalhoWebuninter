// Obtém os elementos do botão e da mensagem
const btnMensagem = document.getElementById('btnMensagem');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de clique no botão
btnMensagem.addEventListener('click', function() {
    // Exibe a mensagem
    mensagem.style.display = 'block';
});