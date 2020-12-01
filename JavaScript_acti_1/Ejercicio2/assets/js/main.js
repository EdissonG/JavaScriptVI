function contar() {

  var input = document.getElementById("primeroe").value;
  var text = "";

  for (var i = 0; i=input.length; i++){
    text += input[i] + "-";
  }
  
  alert ("Texto: " + text);
 }