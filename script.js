const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const mensagemInput = document.querySelector('#mensagem');
const botao = document.querySelector('.btn-enviar');


botao.addEventListener('click', (e)=>{
    e.preventDefault();
    let mensagem = new Mensagem(nomeInput.value, emailInput.value, mensagemInput.value);
    let mensagemPronta = mensagem.criarMensagem();
    mensagem.enviar(mensagemPronta);
});