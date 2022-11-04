const date = new Date('2014-10-07 00:00:00')
const dayOfTheWeek = date.getDay()



switch (dayOfTheWeek) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wensnesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturdays')
    default:
        console.log('Dia da seman inválido')
        break;
}