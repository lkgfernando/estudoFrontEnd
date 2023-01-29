class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const cliente1 = new  Pessoa('Fernando', 'Rodrigues');
const cliente2 = new  Pessoa('Kauan', 'Rodrigues');
const cliente3 = new  Pessoa('Livia Maria', 'Rodrigues');

console.log(`>>>>>>>>>> 01-criandoClasses <<<<<<<<<<<<`)

console.log(cliente1)
console.log(cliente2)
console.log(cliente3)