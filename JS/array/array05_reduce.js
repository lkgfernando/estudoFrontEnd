// Some todos os numeros (reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0)

console.log(total)

// Retorne um array com os pares (Filter)

const numeros_par = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const par = numeros_par.reduce((acumulador, valor, indice, array) => {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []) 

console.log(par)


// Retorne um array com o dobro dos valores
const numeros_dobro = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros_dobro.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])

console.log(dobro)

// Retorne a soma dos numeros pares
const numeros_soma = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const soma_par = numeros_soma.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador += valor
    return acumulador
}, 0)

console.log(soma_par)

// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
]

const acharMaisVelho = pessoas.reduce((acumulador, valor) => {
     if(acumulador.idade > valor.idade) return acumulador
     return valor
})

console.log(acharMaisVelho)