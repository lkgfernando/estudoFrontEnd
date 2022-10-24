let num1 = 9.54578
//Arrendondamento para baixo
let num2 = Math.floor(num1)
let num3 = 0
console.log(num2)

//Arrendondamento para cima
num2 = Math.ceil(num1)
console.log(num2)

//Arrendondamento de 9.48 para baixo > para cima
num1 = 5.60
num3 = 4.47
num2 = Math.round(num1)
console.log(num2)
num2 = Math.round(num3)
console.log(num2)

//Localizar o maio numero
console.log(Math.max(1, 23, 2, 3, 4, 5, -1, -50, 1500 ))

//Localizar o menor numero
console.log(Math.min(-1, 2, 3, 5, -10))

//Numeros aleatório
const aleatorio = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatorio)

//Calcular Raiz Quadrada
let raizQuadrada = 16
console.log(raizQuadrada ** 0.5)
// Ou
console.log(raizQuadrada ** (1 / 2))
