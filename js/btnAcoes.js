btnVerMais = document.getElementById("btnVerMais");
btnVerMais.addEventListener("click", VerMais);

btnVoltar = document.getElementsByName("btnvoltar")
btnVoltar.addEventListener("click", Voltar);


function VerMais(){
    window.open("maisInfo.html", "_self");
}

function Voltar(){
    window.history.back();
}
