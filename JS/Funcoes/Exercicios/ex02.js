/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangle(sideA, sideB, sideC) {

  if(sideA === sideB && sideB === sideC ){
    console.log('Equilátero')
  } else if(sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log('Isósceles')
  } else if(sideA != sideB && sideB != sideC && sideA != sideC) {
    console.log('Escaleno')
  }

}


triangle(5,5,5)
triangle(5,5,6)
triangle(5,4,6)