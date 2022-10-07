const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

console.log(n1,n3,n5,n6)

const [ , [, nota] ] = [[, 8, 10], [9, 6, 8]]
console.log(nota)

const [ [nota1,,nota4], [, nota2]] = [[, 8, 10], [9, 6, 8]]
console.log(nota1)
console.log(nota2)
//console.log(nota3)
console.log(nota4)