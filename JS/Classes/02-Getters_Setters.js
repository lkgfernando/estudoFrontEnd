const _velocidade = Symbol('velocidade')
class Carro {
    constructor(modelo, velMaxima) {
        this.modelo = modelo;
        this.velMaxima = velMaxima;
        this[_velocidade] = 0;

    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= this.velMaxima || valor <= 0) return;
        this[_velocidade] = valor;

    }

    get velocidade() {
        return this[_velocidade];
    }

    aceletar() {
        if(this[_velocidade] >= this.velMaxima) return;
        this[_velocidade]++;
        
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

}

const velocidadePremitida = 120
const fiesta = new Carro('Fiesta', 220);

console.log(`>>>>>>>>>> 02-Getters_Setters <<<<<<<<<<<<`);

for(let i = 0 ; i < velocidadePremitida; i++) {
    fiesta.aceletar()
}

fiesta.freiar()
fiesta.aceletar()
fiesta.aceletar()
fiesta.aceletar()

console.log(fiesta.velocidade);

