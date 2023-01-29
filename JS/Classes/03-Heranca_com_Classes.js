const _ligado = Symbol('Ligado')
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this[_ligado] = false;
    }

    ligar() {
        if(this[_ligado]) {
            console.log(this.nome + ' já está ligado');
            return;
        }

        this[_ligado] = true;
    }

    desligar() {
        if(!this[_ligado]) {
            console.log(this.nome + ' já está desligado');
            return;
        }

        this[_ligado] = false;
    }

}

const smartPhone = new DispositivoEletronico('MI Poco');

console.log(`>>>>>>>>>> 03-Heranca_com_Classes <<<<<<<<<<<<`);
smartPhone.ligar();
smartPhone.ligar();
smartPhone.desligar();
smartPhone.desligar();
console.log(smartPhone);

console.log('>>>>>>>>>>>>>>>>> Classe SmatPhone <<<<<<<<<<<<<<<<<<<');

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const A10 = new SmartPhone('Samsung', 'Azul', 'A10');

A10.ligar()

console.log(A10);