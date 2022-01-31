//Primeira seção, pratos.

let pratos = 0;

function selecionarPrato(classeOpcao) {
    const retirar = document.querySelector(".pratos .opcaoSelec");
    if(retirar != null) {
        retirar.classList.remove("opcaoSelec");
    }

    const elemento = document.querySelector(classeOpcao);
    elemento.classList.add('opcaoSelec');

    pratos += 1;

    if(pratos >= 1 && bebidas >= 1 && sobremesas >= 1){
        const button = document.querySelector(".botao");
        const buttonText = document.querySelector(".botao-texto");
        button.classList.add("botao1");
        buttonText.innerHTML = "Fechar pedido";
        document.querySelector(".botao").disabled = false;
    }
}

function selecionarIcon(classeIcon) {
    const removerIcon = document.querySelector(".pratos .ativar");
    if(removerIcon != null){
        removerIcon.classList.remove('ativar');
    }

    const inserirIcon = document.querySelector(classeIcon);
    inserirIcon.classList.add('ativar');
}


//Segunda seção, bebidas.


let bebidas = 0;

function selecionarBebida(classeOpcao) {
    const retirar = document.querySelector(".bebidas .opcaoSelec");
    if(retirar != null) {
        retirar.classList.remove("opcaoSelec");
    }

    const elemento = document.querySelector(classeOpcao);
    elemento.classList.add('opcaoSelec');

    bebidas += 1;

    if(pratos >= 1 && bebidas >= 1 && sobremesas >= 1){
        const button = document.querySelector(".botao");
        const buttonText = document.querySelector(".botao-texto");
        button.classList.add("botao1");
        buttonText.innerHTML = "Fechar pedido";
        document.querySelector(".botao").disabled = false;
    }
}

function selecionarIconDrink(classeIcon) {
    const removerIcon = document.querySelector(".bebidas .ativar");
    if(removerIcon != null){
        removerIcon.classList.remove('ativar');
    }

    const inserirIcon = document.querySelector(classeIcon);
    inserirIcon.classList.add('ativar');
}


//Terceira seção, sobremesas.

let sobremesas = 0;

function selecionarSobremesa(classeOpcao) {
    const retirar = document.querySelector(".sobremesas .opcaoSelec");
    if(retirar != null) {
        retirar.classList.remove("opcaoSelec");
    }

    const elemento = document.querySelector(classeOpcao);
    elemento.classList.add('opcaoSelec');

    sobremesas += 1;

    if(pratos >= 1 && bebidas >= 1 && sobremesas >= 1){
        const button = document.querySelector(".botao");
        const buttonText = document.querySelector(".botao-texto");
        button.classList.add("botao1");
        buttonText.innerHTML = "Fechar pedido";
        document.querySelector(".botao").disabled = false;
    }
}

function selecionarIconDessert(classeIcon) {
    const removerIcon = document.querySelector(".sobremesas .ativar");
    if(removerIcon != null){
        removerIcon.classList.remove('ativar');
    }

    const inserirIcon = document.querySelector(classeIcon);
    inserirIcon.classList.add('ativar');
}


//Tela final de compra

function telaFinal() {
    const telaF = document.querySelector(".tela-final");
    telaF.classList.remove("desativar");
}

function cancelarPedido() {
    const cancelar = document.querySelector(".tela-final");
    cancelar.classList.add("desativar");
}