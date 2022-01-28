//Primeira seção, pratos.

function selecionar1() {
    const elemento1 = document.querySelector('.opcao1');
    elemento1.classList.add('opcaoSelec');

    //const ativar = document.querySelector('.ativar');
    //ativar.classList.remove('ativar');

    const elemento2 = document.querySelector('.opcao2');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao3');
    elemento3.classList.remove('opcaoSelec');
}

function selecionar2() {
    const elemento1 = document.querySelector('.opcao2');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao1');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao3');
    elemento3.classList.remove('opcaoSelec');
}

function selecionar3() {
    const elemento1 = document.querySelector('.opcao3');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao1');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao2');
    elemento3.classList.remove('opcaoSelec');
}


//Segunda seção, bebidas.

function selecionar4() {
    const elemento1 = document.querySelector('.opcao4');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao5');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao6');
    elemento3.classList.remove('opcaoSelec');
}

function selecionar5() {
    const elemento1 = document.querySelector('.opcao5');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao4');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao6');
    elemento3.classList.remove('opcaoSelec');
}

function selecionar6() {
    const elemento1 = document.querySelector('.opcao6');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao4');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao5');
    elemento3.classList.remove('opcaoSelec');
}


//Terceira seção, sobremesas.

function selecionar7() {
    const elemento1 = document.querySelector('.opcao7');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao8');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao9');
    elemento3.classList.remove('opcaoSelec');
}

function selecionar8() {
    const elemento1 = document.querySelector('.opcao8');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao7');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao9');
    elemento3.classList.remove('opcaoSelec');
}

function selecionar9() {
    const elemento1 = document.querySelector('.opcao9');
    elemento1.classList.add('opcaoSelec');

    const elemento2 = document.querySelector('.opcao7');
    elemento2.classList.remove('opcaoSelec');

    const elemento3 = document.querySelector('.opcao8');
    elemento3.classList.remove('opcaoSelec');
}