
const movie_theater = document.querySelector('#movieTheater')

const div = document.createElement('div')

function createChair (row, chair) {
  // let row = prompt("Informe a fila da poltrona")
  // let armchair = prompt("Informe a poltrona")
  movie_theater.innerHTML = ''

  

  for(let i = 0 ; i <= row ; i++) {
    div.classList.add('chairs')
    div.innerHTML = i
    movie_theater.appendChild(div)
  }

  

  console.log(row, chair)
}




createChair(10,5)