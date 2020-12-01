function contar() {

  var input = document.getElementById("primeroe").value;
  var espacios = (input.split(/\s+/gi).length - 1);

  var tamano = input.length;
  var reverse = "";
  
  for (var i = input.length-1; i>=0; i--){
    reverse += input[i] + ",";
  }
  
  reverse = reverse.substring(-2);

  alert ("Tamaño: " + tamano +"\n" + "Espacios: " + espacios +"\n" + "Reverso: "+reverse);
}
