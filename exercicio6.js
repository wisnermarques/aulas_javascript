function verificar() {
  const idade = parseInt(document.getElementById("idade").value);

  if (idade < 16) {
    document.getElementById("result").innerHTML = "Não eleitor";
  } else if (idade >= 18 && idade <= 65) {
    document.getElementById("result").innerHTML = "Eleitor Obrigatório";
  } else if (idade < 18 || idade > 65) {
    document.getElementById("result").innerHTML = "Eleitor Facultativo";
  } else {
    document.getElementById("result").innerHTML = "";
  }
}
