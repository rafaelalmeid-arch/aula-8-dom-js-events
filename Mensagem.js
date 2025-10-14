class Mensagem {
    constructor(nome, email, mensagem){
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }

    criarMensagem(){
        let mensagemDiagramada = `---- Contato do Site ----
        Nome: ${this.nome}
        Email: ${this.email}
        Mensagem: ${this.mensagem}
        ----------------------`
        return mensagemDiagramada;
    }

    enviar(mensagem){
        const numero = '5516996093275';
        let url = `https://wa.me//${numero}?text=${encodeURI(mensagem)}`;
        window.open(url, '_blank');
    }
}