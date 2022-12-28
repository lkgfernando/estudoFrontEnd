class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const pessoa = new Pessoa('Fernando')
pessoa.falar()


// Factory

const criaPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const pessoa2 = criaPessoa('Kauan')

pessoa2.falar()