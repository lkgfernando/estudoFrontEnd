const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


Object.freeze(pessoa)

pessoa.nome = 'Fernando'
pessoa.end = 'Rua Abc'
console.log(pessoa.nome)

