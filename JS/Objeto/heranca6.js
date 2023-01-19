function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo -- fução construtora', 123)
const aula2 = new Aula('Até breve -- fução construtora', 456)

console.log(aula1, aula2)

//Simulação o operador new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo -- simulação', 123)
const aula4 = novo(Aula, 'Até breve -- simulação', 456)

console.log(aula3, aula4)