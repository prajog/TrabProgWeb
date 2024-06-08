btnVerMais = document.getElementById("btnVerMais");
btnVerMais.addEventListener("click", VerMais);

btnVoltar = document.getElementsByName("btnvoltar")
btnVoltar.addEventListener("click", Voltar);

seta = document.querySelector("#seta");
seta.addEventListener("click", Principal);

setaagd = document.getElementById("setaagd");
setaagd.addEventListener("click", Principal);

setaUbs = document.querySelector("setaUbs");
setaUbs.addEventListener("click", Principal);

function VerMais(){
    window.open("maisInfo.html", "_self");
}

function Voltar(){
    window.history.back();
}

function Principal(){
    window.open("pagPrincipal.html", "_self");
}