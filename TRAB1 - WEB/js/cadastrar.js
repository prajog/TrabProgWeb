var btnCadastrar = document.getElementById("btnCadastrar");
var inNome = document.getElementById("inNome");
var inSobrenome = document.getElementById("inSobrenome");
var inCpf = document.getElementById("inCpf");
var inTel = document.getElementById("inSus");
var inTel = document.getElementById("inTel");
var inEmail = document.getElementById("inEmail");
var inCfmEmail = document.getElementById("inCfmEmail");
var inPssw = document.getElementById("inPssw");
var inCfmPssw = document.getElementById("inCfmPssw");

function cadastrar() {
  if (inNome.value == "") {
    alert("O campo 'Nome' não foi preenchido!");
    inNome.focus();
  }else{
    if(inSobrenome.value == "") {
      alert("O campo 'Sobrenome' não foi preenchido!");
      inSobrenome.focus();
    }else{
      if (inCpf.value == ""){
        alert("O campo 'CPF' não foi preenchido!");
        inCpf.focus();
      }else{
        if (inSus.value == ""){
          alert("O campo 'Cartão do SUS' não foi preenchido!");
          inSus.focus();
        }else{
          if (inTel.value == ""){
            alert("O campo 'Telefone' não foi preenchido!");
            inTel.focus();
          }else{
            if (inEmail.value == ""){
              alert("O campo 'Cartão do SUS' não foi preenchido!");
              inEmail.focus();
            }else{
              if (inCfmEmail.value != inEmail.value){
                alert("O email não corresponde ao informado!");
                inCfmEmail.focus();
              }else{
                if(inPssw.value == ""){
                  alert("O campo 'Senha' não foi preenchido!");
                  inPssw.focus();
                }else{
                  if(inCfmPssw.value != inPssw.value){
                    alert("A senha não corresponde à informada!")
                    inCfmPssw.focus();
                  }else{
                    window.location.href ="pagPrincipal.html";
                  }
                }
              }
            }
          }
        }
      }
    }
  }   
}btnCadastrar.addEventListener("click", cadastrar);
document.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      cadastrar();
    }
});