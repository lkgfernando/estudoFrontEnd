function criaProduto(nomeProduto, valorProduto, desc = 5) {
  return {
    nomeProduto,
    valorProduto,
    desc
  }
}


console.log(criaProduto('Lapis de cor', 10.00))