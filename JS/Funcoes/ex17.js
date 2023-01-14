/*
17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function newPay(flat, pay) {
    switch(flat) {
        case 'A' :
            return pay + (pay * 0.10)
        case 'B' :
            return pay + (pay * 0.15)
        case 'C' :
            return pay + (pay * 0.20)
        default :
            return 'Plano inválido'
    }
}


console.log(newPay('A', 1000))
console.log(newPay('B', 1000))
console.log(newPay('C', 1000))
console.log(newPay('D', 1000))