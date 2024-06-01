var btRecuperar = document.getElementById("btRecuperar");
var inEmail = document.getElementById("inEmail");

function recuperar() {
  if(inEmail.value == ""){
    alert("O campo 'Email' não foi preenchido!");
    inEmail.focus();
  }else{
    if(inEmail.value == "chicoJs"){
      window.location.href = "msgPlaylist.html";
    }else{
      window.location.href = "msgRcpEmail.html";
    }
  }
}btRecuperar.addEventListener("click", recuperar);

document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      recuperar();
    }
});