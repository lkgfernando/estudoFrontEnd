const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop(pilotos) //Remove o Massa da lista de pilotos
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista de pilotos
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no inicio do array
console.log(pilotos)

//splice remove ou adiciona elementos dentro do array
//Adiciona elementos dentro do splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remove
pilotos.splice(3,1) 
console.log(pilotos)

//Slice
const algunsPilotos1 = pilotos.slice(2) //Pega um pedaço do array pilotos apartir do indice 2 do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Pega um pedaço do array pilotos apartir do indice 1 até o indice 3 não pegando o indice 4 
console.log(algunsPilotos2)