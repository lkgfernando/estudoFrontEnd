const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Rodrigues',
    idade: 37,

    fala() {
        console.log(`Á minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}


pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
pessoa.incrementaIdade()
pessoa.fala()
