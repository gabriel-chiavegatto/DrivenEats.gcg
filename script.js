let contagemOpcao = 0;

//prato
function selecionarPrato(botao, pratoN) {
    deselecionarPrato();
    botao.classList.add("prato-selecionado");
    contagemOpcao += 1;
    habilitarFecharPedido();

}
function deselecionarPrato(){
    const pratoSelecionado = document.querySelector(".prato-selecionado");
    if (pratoSelecionado !== null){
        pratoSelecionado.classList.remove("prato-selecionado");
        contagemOpcao -= 1;
    }
}
//bebida
function selecionarBebida(botao, bebidaN) {
    deselecionarBebida();
    botao.classList.add("bebida-selecionada");
    contagemOpcao += 1;
    habilitarFecharPedido();
}
function deselecionarBebida(){
    const bebidaSelecionada = document.querySelector(".bebida-selecionada");
    if (bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("bebida-selecionada");
        contagemOpcao -= 1;
    }
}
//sobremesa
function selecionarSobremesa(botao, sobremesaN) {
    deselecionarSobremesa();
    botao.classList.add("sobremesa-selecionada");
    contagemOpcao += 1;
    habilitarFecharPedido();
}
function deselecionarSobremesa(){
    
    const sobremesaSelecionada = document.querySelector(".sobremesa-selecionada");
    if (sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("sobremesa-selecionada");
        contagemOpcao -= 1;
    
    }
}
let habilitado = false;
//botao de fechar pedido
function habilitarFecharPedido(){
    if(contagemOpcao == 3){
        const habil = document.querySelector(".pre-seleçao");
        habil.innerHTML = "Fechar Pedido";
        habil.classList.add("botao-fechar-pedido");
        habilitado = true;
    }
}
function fecharPedido() {
    if(habilitado == true){
        prompt("Por favor, informe seu nome");
        prompt("Por favor, agora informe seu enderço");

    }
}
