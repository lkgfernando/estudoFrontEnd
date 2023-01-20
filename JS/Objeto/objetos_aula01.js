const pessoa = new Object();
pessoa.nome = 'Fernando';
pessoa.sobrenome = 'Rodrigues';
pessoa.idade = 38;
pessoa.falarNome = function() {
  return (`My name is ${this.nome} ${this.sobrenome}`);
}

console.log(pessoa.falarNome());

pessoa.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa.getDataNascimento())
