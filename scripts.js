let pratoClicado
let bebidaClicada
let doceClicada

let escolha1
let escolha2
let escolha3

function seletorPrato(pratos) {
    escolha1 = "OK"

    pratoClicado = document.querySelector(".c1 .borda_select")
    tudoClicado()
    if (pratoClicado !== null) {
        pratoClicado.classList.remove("borda_select")


    }

    pratos.classList.add("borda_select");


}



function seletorBebida(pratos) {
    escolha2 = "ok"

    bebidaClicada = document.querySelector(".c2 .borda_select")
    tudoClicado()
    if (bebidaClicada !== null) {
        bebidaClicada.classList.remove("borda_select")

    }

    pratos.classList.add("borda_select");


}


function seletorDoce(pratos) {
    escolha3 = "ok"
    doceClicada = document.querySelector(".c3 .borda_select")
    tudoClicado()
    if (doceClicada !== null) {
        doceClicada.classList.remove("borda_select")

    }


    pratos.classList.add("borda_select");


}

function tudoClicado() {

    if (escolha1 && escolha2 && escolha3) {
        let textoBotao = document.querySelector('.texto_next')
        textoBotao.innerHTML = 'Fechar pedido'

        let botao = document.querySelector('.botao_next')
        botao.classList.add("botaoVerde")
    }


}