function returnHours(date) {
    if(date && !(date instanceof Date)) {
        throw new TypeError('Esperado instância de Date.')
    }

    if(!date) {
        date = new Date()
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
const newDate = new Date('01-01-1970 12:58:11')
const hours = returnHours(newDate)
console.log(hours)
} catch (err) {
    console.log('Erro')
} finally {
    console.log('Tenha um ótimo dia de trabalho!!!')
}