// Obtenção dos elementos do formulário de recuperação de senha e do botão de recuperar
var btRecuperar = document.getElementById("btRecuperar");
var inEmail = document.getElementById("inEmail");

// Função para realizar a recuperação de senha
function recuperar() {
  // Verificação de preenchimento do campo de e-mail
  if (inEmail.value == "") {
    alert("O campo 'Email' não foi preenchido!");
    inEmail.focus();
  } else {
    // Redireciona para a página de mensagem de recuperação de e-mail se o campo de e-mail estiver preenchido
    window.location.href = "msgRcpEmail.html";
  }
}

// Adiciona o evento de clique ao botão de recuperar
btRecuperar.addEventListener("click", recuperar);

// Adiciona o evento de tecla pressionada para a tecla "Enter" para chamar a função de recuperação
document.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    recuperar();
  }
});
