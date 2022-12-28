// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função


const x = 'Global'
const y = 'Global Y'

function fora() {
  const x = 'Local'
  return function dentro() {
    return x
  }
}

const minhaFuncao = fora()

console.log(minhaFuncao())


function fora2() {
  const y = 'Local Y'
  return () => {
    return y
  }

}

const valueY = fora2()
console.log(valueY())