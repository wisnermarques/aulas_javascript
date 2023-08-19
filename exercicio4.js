function verificar() {
  const palavra = document.getElementById("palavra").value.toLowerCase();
  //typeof(palavra) - verifica o tipo de uma variável ou constante
  if (palavra == '') {
    document.getElementById("result").innerHTML =
      "NÃO FOI INFORMADA NENHUMA PALAVRA";
  } else {
    const inversa = palavra.split("").reverse().join("");
    if (palavra == inversa) {
      // 5 == '5'
      document.getElementById("result").innerHTML = "SIM";
    } else {
      document.getElementById("result").innerHTML = "NÃO";
    }
  }
}

function limpar() {
  document.getElementById("result").innerHTML = "";
}
