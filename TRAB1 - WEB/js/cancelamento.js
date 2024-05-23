var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target == modal) {
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