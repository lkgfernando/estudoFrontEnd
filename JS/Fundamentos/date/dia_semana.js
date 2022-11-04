
function nameDayWeek(day) {
    let dayName
    switch (day) {
        case 0:
            dayName = 'Sunday'
            return dayName;
        case 1:
            dayName = 'Monday'
            return dayName
        case 2:
            dayName = 'Tuesday'
            return dayName
        case 3:
            dayName = 'Wensnesday'
            return dayName
        case 4:
            dayName = 'Thursday'
            return dayName
        case 5:
            dayName = 'Friday'
            return dayName
        case 6:
            dayName = 'Saturdays'
        default:
            dayName = 'Dia da semana inválido'
            return dayName;
    }

}


const date = new Date()
const dayOfTheWeek = date.getDay()
const dayNameText = nameDayWeek(dayOfTheWeek)

console.log(dayOfTheWeek, dayNameText)