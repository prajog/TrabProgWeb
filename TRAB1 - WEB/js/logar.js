var inID = document.getElementById("inID");
var inSenha = document.getElementById("inSenha");
var btEntrar = document.getElementById("btEntrar");

function entrar() {
    var id = inID.value;
    var senha = inSenha.value;
    
    if (inID.value == "") {
        alert("O campo 'CPF ou Cartão do SUS' não foi preenchido!");
        inID.focus();
    }else{
        if(inSenha.value == "") {
            alert("O campo 'Senha' não foi preenchido!");
            inSenha.focus();
        }else{
            if (inID.value != "chicoin" || inSenha.value != "eutentei"){
                alert("Usuário ou Senha foram digitados errado!")
            }else{
                window.location.href = "pagPrincipal.html";
            }
        }
    }

}btEntrar.addEventListener("click", entrar);