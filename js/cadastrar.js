// Obtenção dos elementos do formulário de cadastro
var btnCadastrar = document.getElementById("btnCadastrar");
var inNome = document.getElementById("inNome");
var inSobrenome = document.getElementById("inSobrenome");
var inCpf = document.getElementById("inCpf");
var inSus = document.getElementById("inSus");
var inTel = document.getElementById("inTel");
var inEmail = document.getElementById("inEmail");
var inCfmEmail = document.getElementById("inCfmEmail");
var inPssw = document.getElementById("inPssw");
var inCfmPssw = document.getElementById("inCfmPssw");

function cadastrar() { // Função para cadastro

  // Verificações de preenchimento dos campos
  if (inNome.value == "") {
    alert("O campo 'Nome' não foi preenchido!");
    inNome.focus();
  } else if (inSobrenome.value == "") {
    alert("O campo 'Sobrenome' não foi preenchido!");
    inSobrenome.focus();
  } else if (inCpf.value == "") {
    alert("O campo 'CPF' não foi preenchido!");
    inCpf.focus();
  } else if (inSus.value == "") {
    alert("O campo 'Cartão do SUS' não foi preenchido!");
    inSus.focus();
  } else if (inTel.value == "") {
    alert("O campo 'Telefone' não foi preenchido!");
    inTel.focus();
  } else if (inEmail.value == "") {
    alert("O campo 'E-mail' não foi preenchido!");
    inEmail.focus();
  } else if (inCfmEmail.value != inEmail.value) {
    alert("O e-mail de confirmação não corresponde ao informado!");
    inCfmEmail.focus();
  } else if (inPssw.value == "") {
    alert("O campo 'Senha' não foi preenchido!");
    inPssw.focus();
  } else if (inCfmPssw.value != inPssw.value) {
    alert("A senha de confirmação não corresponde à informada!")
    inCfmPssw.focus();
  } else {
    // Redireciona para a página principal se todas as verificações estiverem passando
    window.location.href = "pagPrincipal.html";
  }
}

// Adiciona o evento de clique ao botão de cadastrar
btnCadastrar.addEventListener("click", cadastrar);

// Adiciona o evento de tecla pressionada para a tecla "Enter" para chamar a função cadastrar
document.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    cadastrar();
  }
});
