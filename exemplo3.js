function cadastrar() {
  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const email = document.getElementById("email").value;

  const pessoa = {
    nome: nome,
    idade: idade,
    email: email,
  };

  const telefones = ["64 9 9987-4100", "62 9 9654-7845"];

  const produtos = [
    { nome: "TV", quantidade: 10, preco: 2500.78 },
    { nome: "Celular", quantidade: 5, preco: 2900.45 },
    { nome: "Notebook", quantidade: 3, preco: 3500.89 },
    { nome: "Computador", quantidade: 10, preco: 2871.45 },
  ];

  document.getElementById("result").innerHTML =
    pessoa.nome +
    "<br>" +
    pessoa.idade +
    "<br>" +
    pessoa.email +
    "<br>" +
    telefones[0] +
    "<br>" +
    produtos[2].nome;

  let lista = "";

  // for (let i = 0; i < produtos.length; i++) {
  //    // lista = lista + produtos[i]
  //   lista += produtos[i].nome + '-' + produtos[i].quantidade + '<br>';
  // }

  // for (const produto of produtos) {
  //   lista += produto.nome + "-" + produto.quantidade + "<br>";
  // }

  let i = 0;
  while (i < produtos.length) {
    lista += produtos[i].nome + "-" + produtos[i].quantidade + "<br>";
    i++;
  }

  document.getElementById("produtos").innerHTML = lista;
}
