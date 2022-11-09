
const movie_theater = document.querySelector('#movieTheater')

const div = document.createElement('div')

function createChair (row, chair) {
  // let row = prompt("Informe a fila da poltrona")
  // let armchair = prompt("Informe a poltrona")
  movie_theater.innerHTML = ''

let i = 0

while (i <= 10 ) {
  div.classList.add('chairs')
  div.innerHTML += 0
  movie_theater.appendChild(div)
  i++
}


  

  console.log(row, chair)
}




createChair(10,10)