var btncadastrar = document.getElementById("btncadastrar");

function cadastrar() {
    window.location.href = "pagPrincipal.html";
}btncadastrar.addEventListener("click", cadastrar);
document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      cadastrar();
    }
});