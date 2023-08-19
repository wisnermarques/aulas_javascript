function calculaPesoIdeal() {
  const altura = parseFloat(document.getElementById("altura").value);
  const sexoM = document.getElementById("masc");
  const sexoF = document.getElementById("fem");
  let pesoIdeal;
  // ex.: 5 == '5' - true; 5 === '5' - false
  if (sexoM.checked) {
    pesoIdeal = 72.7 * altura - 58;
  }
  if (sexoF.checked) {
    pesoIdeal = 62.1 * altura - 44;
  }

  document.getElementById("result").innerHTML = pesoIdeal.toFixed(2);
}

function limpar() {
  document.getElementById("result").innerHTML = "";
}
