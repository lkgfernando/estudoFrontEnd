const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27, 30]
const numerosEmDobro = numeros.map( valor => valor * 2)

console.log(numerosEmDobro)


const pessoas = [
  { nome: 'Fernando', idade: 37 },
  { nome: 'Kauan', idade: 12 },
  { nome: 'Livia Maria', idade: 8 },
  { nome: 'Glacieli', idade: 44 },
  { nome: 'José', idade: 59 },
  { nome: 'Pedro', idade: 7 }
]



// Adiciona uma chave id em cada objeto (id)
const objId = pessoas.map(function(obj, indice) {
  const newObj = {...obj}
  newObj.id = indice
  return newObj
})

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map( (obj, indice) => {
  const newObj = {...obj}
  delete newObj.nome
  return newObj
})

console.log(idades)

console.log(nomes)
console.log(idades)


console.log(objId)
console.log(pessoas)