let refeicao = "";
let refeicaoPreco = 0;
let refeicaoPrecoNum = 0;

let drink = "";
let drinkPreco = 0;
let drinkPrecoNum = 0;

let dessert = "";
let dessertPreco = 0;
let dessertPrecoNum = 0;

let precoTotal = 0;

function NomePrecoRef(nome, preco, precoNum, opcaoPrato, precoPrato, precoFinal) {
    refeicao = nome;
    refeicaoPreco = preco;
    refeicaoPrecoNum = precoNum;
    precoTotal = refeicaoPrecoNum + drinkPrecoNum + dessertPrecoNum;
    precoTotal.toFixed(2);

    const pratoNome = document.querySelector(opcaoPrato);
    pratoNome.innerHTML = refeicao;

    const pratoPreco = document.querySelector(precoPrato);
    pratoPreco.innerHTML = refeicaoPreco;

    const precoF = document.querySelector(precoFinal);
    precoF.innerHTML = "R$" + precoTotal.toFixed(2).replace(".", ",");
}

function NomePrecoBeb(nome, preco, precoNum, opcaoPrato, precoPrato, precoFinal) {
    drink = nome;
    drinkPreco = preco;
    drinkPrecoNum = precoNum;
    precoTotal = refeicaoPrecoNum + drinkPrecoNum + dessertPrecoNum;
    precoTotal.toFixed(2);

    const pratoNome = document.querySelector(opcaoPrato);
    pratoNome.innerHTML = drink;

    const pratoPreco = document.querySelector(precoPrato);
    pratoPreco.innerHTML = drinkPreco;

    const precoF = document.querySelector(precoFinal);
    precoF.innerHTML = "R$" + precoTotal.toFixed(2).replace(".", ",");
}

function NomePrecoSob(nome, preco, precoNum, opcaoPrato, precoPrato, precoFinal) {
    dessert = nome;
    dessertPreco = preco;
    dessertPrecoNum = precoNum;
    precoTotal = refeicaoPrecoNum + drinkPrecoNum + dessertPrecoNum;
    precoTotal.toFixed(2);

    const pratoNome = document.querySelector(opcaoPrato);
    pratoNome.innerHTML = dessert;

    const pratoPreco = document.querySelector(precoPrato);
    pratoPreco.innerHTML = dessertPreco;

    const precoF = document.querySelector(precoFinal);
    precoF.innerHTML = "R$" + precoTotal.toFixed(2).replace(".", ",");
}


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
    //refeicao = ".nome";

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

function enviarPedido() {
    let mensagem = ""
    mensagem += "Olá, gostaria de fazer o pedido:";
    mensagem += "\n";
    mensagem += "- Prato: " + refeicao;
    mensagem += "\n";
    mensagem +="- Bebida: " + drink;
    mensagem += "\n";
    mensagem +="- Sobremesa: " + dessert;
    mensagem += "\n";
    mensagem +="Total: R$ " + precoTotal.toFixed(2);

    let wppMens = encodeURIComponent(mensagem);
    let preDef = "https://wa.me/5584987070839?text=";

    window.open(preDef + wppMens);
    
}