//prato
function selecionarPrato(botao, pratoN) {
    deselecionarPrato();
    botao.classList.add("prato-selecionado");

}
function deselecionarPrato(){
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    if (pratoSelecionado !== null){
        pratoSelecionado.classList.remove("prato-selecionado");
    }
}
//bebida
function selecionarBebida(botao, bebidaN) {
    deselecionarBebida();
    botao.classList.add("bebida-selecionada");
}
function deselecionarBebida(){
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    if (bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("bebida-selecionada");
    }
}
//sobremesa
function selecionarSobremesa(botao, sobremesaN) {
    deselecionarSobremesa();
    botao.classList.add("sobremesa-selecionada");
}
function deselecionarSobremesa(){
    
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    if (sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("sobremesa-selecionada");
    
    }
}

//botao de fechar pedido
function fecharPedido() {

}
