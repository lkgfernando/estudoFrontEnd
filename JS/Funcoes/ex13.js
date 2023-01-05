/*
13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function dayOfTheWeek(day) {
    switch (day) {
        case 1:
            console.log("Domingo")
            break;
        case 2:
            console.log("Segunda Feira")
            break
        case 3:
            console.log("Terça Feira")
            break
        case 4: 
            console.log("Quarta Feira")
            break
        case 5:
            console.log("Quinta Feira")
            break
        case 6:
            console.log("Sexta Feira")
            break
        case 7:
            console.log("Sabádo")
            break
        default:
            console.log("Dia inválido")
            break;
    }
}

dayOfTheWeek(1)
dayOfTheWeek(2)
dayOfTheWeek(3)
dayOfTheWeek(4)
dayOfTheWeek(5)
dayOfTheWeek(6)
dayOfTheWeek(7)
dayOfTheWeek(8)