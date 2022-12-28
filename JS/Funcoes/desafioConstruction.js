function Pessoa(nome) {


  this.falar = () => {
    console.log(`Meu nome é ${nome}`)
  }

}


const pessoa = new Pessoa('Fernando')

pessoa.falar()