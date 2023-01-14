/*
18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/


function writeNumber(number) {
    switch(number) {
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default :
            return 'Opção inválida!!'
    }
}

console.log(writeNumber(1))
console.log(writeNumber(2))
console.log(writeNumber(3))
console.log(writeNumber(4))
console.log(writeNumber(5))
console.log(writeNumber(6))
console.log(writeNumber(7))
console.log(writeNumber(8))
console.log(writeNumber(9))
console.log(writeNumber(10))
console.log(writeNumber(11))