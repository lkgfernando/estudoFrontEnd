function watch() {

function showSeconds(seconds) {
    let newSeconds = new Date(seconds * 1000)

    return newSeconds.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}


const watch = document.querySelector('#watch')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const zero = document.querySelector('#zero')
let secondsTime = 0
let timer

//Função inicia relógio começando pelos segundos
function startWatch() {
    timer = setInterval(function() {
        secondsTime++
        watch.innerHTML = showSeconds(secondsTime) 
    }, 1000)
}

function pauseWatch() {
    const pause = setTimeout(function() {
        clearInterval(timer)
    }, 0)
}

function zeroTime() {
    clearInterval(timer)
    secondsTime = 0
    const zero = showSeconds(secondsTime)
    watch.innerHTML = zero
}



start.addEventListener('click', function(event) {
    watch.classList.remove('pause')
    clearInterval(timer)
    startWatch()
})

pause.addEventListener('click', function(event) {
    pauseWatch()
    watch.classList.add('pause')
})

zero.addEventListener('click', function(event) {
    watch.classList.remove('pause')
    zeroTime()
})
}

watch()