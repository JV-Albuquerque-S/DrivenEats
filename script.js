//Primeira seção, pratos.

let pratos = 0;

if(pratos == 1){
    alert("aaa");
}

function selecionarPrato(classeOpcao) {
    const retirar = document.querySelector(".pratos .opcaoSelec");
    if(retirar != null) {
        retirar.classList.remove("opcaoSelec");
    }

    const elemento = document.querySelector(classeOpcao);
    elemento.classList.add('opcaoSelec');

    pratos += 1;
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
}

function selecionarIconDessert(classeIcon) {
    const removerIcon = document.querySelector(".sobremesas .ativar");
    if(removerIcon != null){
        removerIcon.classList.remove('ativar');
    }

    const inserirIcon = document.querySelector(classeIcon);
    inserirIcon.classList.add('ativar');
}