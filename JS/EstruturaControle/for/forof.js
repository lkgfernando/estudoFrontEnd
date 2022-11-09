const names = ['Fernando', 'José', 'Rodrigues']



for (let valor of names) {
  console.log(valor)
}


console.log('############################')


names.forEach(function(valor, index, array) {
  console.log(valor, index, array)
})