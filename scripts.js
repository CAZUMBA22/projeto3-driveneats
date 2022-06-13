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
    let comida = document.querySelector(".c1 .borda_select h2")
    let bebida = document.querySelector(".c2 .borda_select h2")
    let doce = document.querySelector(".c3 .borda_select h2")

    let vComida = document.querySelector(".c1 .borda_select span")
    let vBebida = document.querySelector(".c2 .borda_select span")
    let vDoce = document.querySelector(".c3 .borda_select span")



    if (escolha1 && escolha2 && escolha3) {
        let comidaOk = comida.innerHTML
        let bebidaOk = bebida.innerHTML
        let doceOk = doce.innerHTML

        let valorCOK = Number(vComida.innerHTML)
        let valorBOK = Number(vBebida.innerHTML)
        let valorDOK = Number(vDoce.innerHTML)

        valorTotalOk = (valorCOK + valorBOK + valorDOK)

        let compraZap = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${comidaOk}
    - Bebida: ${bebidaOk}
    - Sobremesa: ${doceOk}
    Total: R$ ${valorTotalOk.toFixed(2)}
            `

        const linkZap = compraZap;
        const encodedlink = encodeURIComponent(linkZap, "_blank");
        const allLink = "https://wa.me/5598992106666?text=" + `${encodedlink}`

        openLink(allLink)
    }
}




function openLink(element) {
    window.open(element);
}