function Conta(ag, conta, saldo) {
    this.ag = ag;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
    return console.log(`Saldo insuficiente ${this.saldo}`);
    }

    this.saldo -= valor;
    this.saldoConta();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.saldoConta();
}

Conta.prototype.saldoConta = function() {
    return console.log(`Ag/C: ${this.ag} / ${this.conta} | R$${this.saldo.toFixed(2).replace('.', ',')}`);
}


const conta1 = new Conta(17, 16, 100);

conta1.sacar(90);
conta1.depositar(50);

function ContaCorrente(ag, conta, saldo, limite) {
    Conta.call(this, ag, conta, saldo);
    this.limite = limite;
}

// Criando uma conta corrente utlizando função herança da function Conta e adicionando novo métodos

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = Conta;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.saldoConta();
};

const conta2 = new ContaCorrente(1475, 24578, 300, 500);

conta2.sacar(750);

// Criando conta Poupança

function ContaPoupanca(ag, conta, saldo) {
    Conta.call(this, ag, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = Conta;

console.log(">>>>> Conta Poupança <<<<<<");
const contaP1 = new ContaPoupanca(18, 1945, 0);

contaP1.depositar(150);
contaP1.sacar(140);





