//Filter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// 1º Exemplo de filter
const numerosFiltrados = numeros.filter((valor, indice) => {
    console.log(valor, indice)
    return valor > 10
})

// 2º Exemplo de filter
const numerosFiltrados02 = numeros.filter(valor => valor > 10)


console.log(numerosFiltrados)
console.log(numerosFiltrados02)

// 3º Exemplo de filter
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]

// Filtrar pessoas com nome maior que 5 letras
const filtrarPessaos = pessoas.filter(obj => obj.nome.length >= 5)
console.log(filtrarPessaos)

// Filtrar pessoas com idade maior que 50

const filtrarPessoasIdade = pessoas.filter(obj => obj.idade > 50)

console.log(filtrarPessoasIdade)

// Filtrar nome de pessoas que terminam com a letra A

const filtrarNomes = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(filtrarNomes)