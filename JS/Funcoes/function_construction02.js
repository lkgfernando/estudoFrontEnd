function Carro (velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0

  //Metodo publico
  this.acelerar = function() {
    if(velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  //metodo publico

  this.getVelocidadeAtual = function() {
    return velocidadeAtual
  }
  
}

const uno = new Carro

uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(380, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(`Ferrari ${ferrari.getVelocidadeAtual()}`)