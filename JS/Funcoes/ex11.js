/*
11) ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function leapYear(year) {
    if(year % 4 === 0 || year % 400 === 0 || (year % 100 === 0 && year % 400 === 0)) {
        return true
    } else {
        return false
    }
}


console.log(leapYear(0))
console.log(leapYear(4))
console.log(leapYear(100))
console.log(leapYear(400))
console.log(leapYear(800))
console.log(leapYear(1900))
console.log('-----------------------------')

function leapYear2(year) {
    if(year === 0) {
        return false
    } else if(year % 400 === 0) {
        return true
    } else if(year % 100 === 0) {
        return false
    } else if(year % 4 === 0) {
        return true
    } else {
        return false
    }
}

console.log(leapYear2(0))
console.log(leapYear2(4))
console.log(leapYear2(100))
console.log(leapYear2(400))
console.log(leapYear2(800))
console.log(leapYear2(1900))
console.log(leapYear2(2000))