let pratoClicado
let bebidaClicada
let doceClicada
let icone

let escolha1
let escolha2
let escolha3

function seletorPrato(elemento) {
    escolha1 = "OK"

    pratoClicado = document.querySelector(".c1 .borda_select")
    tudoClicado()
    if (pratoClicado !== null) {
        pratoClicado.classList.remove("borda_select")


    }

    elemento.classList.add("borda_select");
    seletoricone1(elemento)



}

function seletoricone1(elemento) {

    const iconeok = document.querySelector(".c1 .verde")
    tudoClicado()
    if (iconeok !== null) {

        iconeok.classList.remove("verde")

    }
    elemento.querySelector(".icone_ok").classList.add("verde")

}

function seletorBebida(elemento) {
    escolha2 = "ok"

    bebidaClicada = document.querySelector(".c2 .borda_select")
    tudoClicado()
    if (bebidaClicada !== null) {
        bebidaClicada.classList.remove("borda_select")

    }

    elemento.classList.add("borda_select");
    seletoricone2(elemento)


}

function seletoricone2(elemento) {

    const iconeok = document.querySelector(".c2 .verde")
    tudoClicado()
    if (iconeok !== null) {

        iconeok.classList.remove("verde")

    }
    elemento.querySelector(".c2 .icone_ok").classList.add("verde")

}

function seletorDoce(elemento) {
    escolha3 = "ok"
    doceClicada = document.querySelector(".c3 .borda_select")
    tudoClicado()
    if (doceClicada !== null) {
        doceClicada.classList.remove("borda_select")

    }


    elemento.classList.add("borda_select");
    seletoricone3(elemento)


}

function seletoricone3(elemento) {

    const iconeok = document.querySelector(".c3 .verde")
    tudoClicado()
    if (iconeok !== null) {

        iconeok.classList.remove("verde")

    }
    elemento.querySelector(".c3 .icone_ok").classList.add("verde")

}


function tudoClicado() {

    if (escolha1 && escolha2 && escolha3) {
        let textoBotao = document.querySelector('.texto_next')
        textoBotao.innerHTML = 'Fechar pedido'

        let botao = document.querySelector('.botao_next')
        botao.classList.add("botaoVerde")
    }


}

function fecharPedido() {
    if (escolha1 && escolha2 && escolha3) {

        let msgPrato = c1.querySelector("h2").innerHTML;
        let msgBebida = c2.querySelector("h2").innerHTML;
        let msgSobremesa = c3.querySelector("h2").innerHTML;


        let msg = 'testestteste'


        location.assign(`https://wa.me/5598992106666?text=${msg}`);
    }
}