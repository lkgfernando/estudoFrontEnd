
const descriptionDate = function textDate() {
    const date = new Date()
    let weekDay = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()
    let hour = date.getHours()


    return `${month}`
}


function elementsH1() {
    const tagH1 = document.createElement('h1')
    return tagH1
}

//Cria elementos HTML

function createHtml(msg, isValid) {
    const container = document.querySelector('#container')

    container.innerHTML = ''

    const tagH1 = elementsH1()

    tagH1.innerHTML = msg

    container.appendChild(tagH1)

}

//Fução de data


createHtml(descriptionDate())