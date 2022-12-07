//Função construtora --> objetos
//Função fabrica --> objetos

function People(name, lastname) {
  this.name = name
  this.lastname = lastname

  this.metodo = () => {
    console.log(this.name + ': sou um método')
  }

}

const p1 = new People('Fernando', 'Rodrigues')

p1.metodo()

console.log(p1.lastname)