const botoes = document.querySelectorAll("button");
const estadoBotoes = new Map();

botoes.forEach(botao => {
    botao.addEventListener("click", function () {
        console.log("Botão clicado");

        const span = this.querySelector("span");
        let valorAtual = Number(span.textContent);

        if (!estadoBotoes.has(this)) {
            estadoBotoes.set(this, false);
        }

        let jaCurtiu = estadoBotoes.get(this);

        if (jaCurtiu === false) {
            span.textContent = valorAtual + 1;
            estadoBotoes.set(this, true);
        } else {
            span.textContent = valorAtual - 1;
            estadoBotoes.set(this, false);
        }
    });
});