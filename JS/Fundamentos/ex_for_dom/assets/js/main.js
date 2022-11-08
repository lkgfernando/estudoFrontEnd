const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Fraze 3'},
    {tag: 'section', text:'Fraze 4'}
]


const container = document.querySelector('.container')

const div = document.createElement('div')

for (let i = 0 ; i < elements.length ; i++){
    let{tag, text} = elements[i]
    let creatTag = document.createElement(tag)
    let creatText = document.createTextNode(text)
    // creatTag.innerText = text

    creatTag.appendChild(creatText)
    div.appendChild(creatTag)
}

container.appendChild(div)

