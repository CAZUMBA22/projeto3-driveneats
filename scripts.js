function seletor(pratos) {
    const caixaClicada = document.querySelector(".borda_select")
    if (caixaClicada !== null) {
        caixaClicada.classList.remove("borda_select");
    }

    pratos.classList.add("borda_select");
}