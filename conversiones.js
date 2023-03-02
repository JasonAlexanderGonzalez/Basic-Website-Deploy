function binario(lista) {
  var tempDecimal,
    rem,
    binary = 0;
  place = 1;
  tempDecimal = lista;

  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }

  alert(binary);

  return (document.getElementById("p2").innerText =
    "El numero binario es : " + binary);

    
}



function octal(num) {
  alert(
    (document.getElementById("p3").innerText =
      "El numero en Octal es : " + num.toString(8))
  );

  return (document.getElementById("p3").innerText =
    "El numero en Octal es : " + num.toString(8));
}

