/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

function factorialCalculation(number) {
    if(number === 0){
        return 1
    } else {
        return number * factorialCalculation(number - 1)
    }
}

console.log(factorialCalculation(0))




