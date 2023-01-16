/*
01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function calculator(num1, num2) {

  return `Soma: ${num1 + num2}, Subtração: ${num1 - num2}, Multiplicação: ${num1 * num2}, Divisão: ${num1 / num2}`

}


const calc = calculator(5, 6)

console.log(calc)