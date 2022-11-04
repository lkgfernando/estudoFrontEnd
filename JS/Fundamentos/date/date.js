function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}` //Operador ternário
}

function formatDate(date) {
    const day = zeroAEsquerda(date.getDate())
    const month = zeroAEsquerda(date.getMonth())
    const year = zeroAEsquerda(date.getFullYear())
    const hour = zeroAEsquerda(date.getHours())
    const min = zeroAEsquerda(date.getMinutes())
    const sec = zeroAEsquerda(date.getSeconds())

    return `${day}/${month}/${year} ${hour}:${min}:${sec}`
}




const date = new Date()



console.log(formatDate(date))