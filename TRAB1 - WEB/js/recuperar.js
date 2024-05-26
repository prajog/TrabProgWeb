var btRecuperar = document.getElementById("btRecuperar");
var inEmail = document.getElementById("inEmail");

function enviar() {
  if(inEmail.value == ""){
    alert("O campo 'Email' não foi preenchido!");
    inEmail.focus();
  }else{
    window.location.href = "msgRcpEmail.html";
  }
}btRecuperar.addEventListener("click", enviar);

document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      enviar();
    }
});