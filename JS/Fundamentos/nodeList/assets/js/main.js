const selectClass = document.querySelector('.container')
const paragraph = selectClass.querySelectorAll('p')

const styleBody = getComputedStyle(document.body)
const bgColor = styleBody.backgroundColor


for (let p of paragraph) {
    
    p.style.backgroundColor = bgColor
    p.style.color = '#fff'
}