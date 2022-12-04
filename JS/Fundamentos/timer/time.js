function showHour() {
    let currentDate = new Date()

    return currentDate.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}


const timer = setInterval(function() {
    console.log(showHour())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 4000)

setTimeout(function() {
    console.log('Hello Word')
}, 5000)
