const horarios = document.querySelector("#horarios");
let selecionado = false;
let elem = null;

// Eventos
for (let i = 0; i< horarios.childElementCount; i++){ // Adicionando evento de click aos botões de horários
    horarios.children[i].addEventListener("click", (ev) => {mudaCor(ev)});
};

// Funcao que muda a cor do elemento
function mudaCor(ev){

    // Se nenhum elemento foi selecionado...
    if (selecionado === false){ 

        // Liga a classe selHorario no elemento, mudando sua cor
        ev.target.classList.toggle("selHorario");
        selecionado = true;

        // Pega e salva o elemento que chamou o evento click
        elem = ev.target;
    } else {

        // Se o elemento salvo for o mesmo que o do click...
        if (ev.target === elem){

            // Muda a cor do elemento, para "deselecionar"
            ev.target.classList.toggle("selHorario");

            selecionado = false;
        }
    }
}