function sortearNumeros() {
    let numerosSorteados = [];
    while (numerosSorteados.length < 15) {
      let numeroSorteado = Math.floor(Math.random() * 25) + 1;
      if (!numerosSorteados.includes(numeroSorteado)) {
        numerosSorteados.push(numeroSorteado);
      }
    }
    return numerosSorteados.sort();
  }
  
  console.log(sortearNumeros());