
// @@@@@@@@@@@@@@@@@@@@@ Exemplo feito por mim mais complexo.

const descriptionDate = function textDate() {
    const date = new Date()
    let nweekDay = date.getDay()
    let nday = date.getDate()
    let nmonth = date.getMonth()
    let nyear = date.getFullYear()
    let nhour = date.getHours()
    let nMinutes = date.getMinutes()
    let descDay = ''
    let descMonth = ''

    switch (nweekDay) {
        case 0:
            descDay = 'domingo'
            break
        case 1:
            descDay = 'segunda-feira'
            break
        case 2:
            descDay = 'terça-feira'
            break
        case 3:
            descDay = 'quarta-feira'
            break
        case 4:
            descDay = 'quinta-feira'
            break
        case 5:
            descDay = 'sexta-feira'
            break
        case 6:
            descDay = 'sábado'
            break
        default:
            descDay = 'dia da semana inválido' 
            break;
    }

    switch(nmonth) {
        case 0:
            descMonth = 'janeiro'
            break
        case 1:
            descMonth = 'fevereiro'
            break
        case 2:
            descMonth = 'março'
            break
        case 3:
            descMonth = 'abril'
            break
        case 4:
            descMonth = 'maio'
            break
        case 5:
            descMonth = 'junho'
            break
        case 6:
            descMonth = 'julho'
            break
        case 7:
            descMonth = 'agosto'
            break
        case 8:
            descMonth = 'setembro'
            break
        case 9:
            descMonth = 'outubro'
            break
        case 10:
            descMonth = 'novembro'
            break
        case 11:
            descMonth = 'dezembro'
            break
        default:
            descMonth = 'mês inválido'
            break

    }


    return `${descDay}, ${nday} de ${descMonth} de ${nyear} ${zeroLeft(nhour)}:${zeroLeft(nMinutes)}`
}




function elementsH1() {
    const tagH1 = document.createElement('h1')
    return tagH1
}

function elementsH2() {
    const tagH2 = document.createElement('h2')
    return tagH2
}

//Cria elementos HTML

function createHtml(tgH1, tgH2) {
    const container = document.querySelector('.container h1')
    const containerH2 = document.querySelector('.container h2')

    container.innerHTML = ''
    containerH2.innerHTML = ''

    const tagH1 = elementsH1()
    const tagH2 = elementsH2()

    tagH1.innerHTML = tgH1
    tagH2.innerHTML = tgH2

    container.appendChild(tagH1)
    container.appendChild(tagH2)

}

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`
}


// Exemplo maix enxuto

function secondExemple() {
    const newDate = new Date()
    const options = { weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric'
                     };
    const opcHours = { hour: '2-digit',
                       minute: '2-digit'
                     }
 
    let descriptionDate = newDate.toLocaleDateString('pt-BR', options)
    let hours = newDate.toLocaleTimeString('pt-BR', opcHours)
    console.log(descriptionDate,hours)
    return `${descriptionDate} ${hours} `



}

console.log(secondExemple())
//Fução de data


createHtml(descriptionDate(), secondExemple())


