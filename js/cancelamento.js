var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// Evento de click na tela
window.onclick = function(event) {

  // Se o objeto do evento foi o aviso
  if (event.target == modal) {

    // Aviso some
    modal.style.display = "none";
  }
}

function some(x){
  document.getElementById('id01').style.display='none';
  var modal2 = document.getElementById('id02');

  if (x == 0){
    modal2.style.display = 'block';
  }
}