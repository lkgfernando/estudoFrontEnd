// EXECICIO 1
// Faça as 4 operações básicas com base nos números 2 e 4:
// Ao final de cada operações imprima n atela no seguinte formato
// Soma: 2 + 4 = x
// Subtração: 2 - 4 = x
// Divisão: 2 / 4 = x
// Multiplicação: 2 * 4 = x

const soma = '+'
const subtracao = '-'
const multiplicacao = '*'
const divisao = '/'
let num1 = 2
let num2 = 8

function calculadora(num1, num2, operador) {
    if(operador === '+') {
        return num1 + num2
    } else if (operador === '-') {
        return num1 - num2
    } else if (operador === '*') {
        return num1 * num2
    } else if (operador === '/') {
        return num1 / num2
    }
}

let somarNumero = calculadora(num1,num2,soma)
console.log(`Soma: de ${num1} + ${num2} = ${somarNumero}`)

let subtracaoNumero = calculadora(num1,num2,subtracao)
console.log(`Subtração: de ${num1} - ${num2} = ${subtracaoNumero}`)

let multiplicarNumero = calculadora(num1,num2,multiplicacao)
console.log(`Multiplicação: de ${num1} * ${num2} = ${multiplicarNumero}`)

let divisaoNumero = calculadora(num1,num2,divisao)
console.log(`Divisão: de ${num1} / ${num2} = ${divisaoNumero}`)