const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        console.log("Fui clicado");
        
        let texto = this.querySelector("span");
        let numero = Number(texto.textContent);

        if (this.dataset.curtiu === "true") {
            texto.textContent = numero - 1;
            this.dataset.curtiu = "false";
        } else {
            texto.textContent = numero + 1;
            this.dataset.curtiu = "true";
        }
    });
});