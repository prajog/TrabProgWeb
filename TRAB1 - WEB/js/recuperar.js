var btRecuperar = document.getElementById("btRecuperar");

function enviar() {
    window.location.href = "pagPrincipal.html";
}btRecuperar.addEventListener("click", enviar);

document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      enviar();
    }
});