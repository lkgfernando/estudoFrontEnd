const produto = Object.preventExtensions({
    nome: 'Carderno', preco: 5.99, tag: 'Promoção'
})


console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
produto.preco = 1.99
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)