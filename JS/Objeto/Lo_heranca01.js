function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

//Criar objeto

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percent) {
    this.preco += (this.preco * (percent / 100));
};

Camiseta.prototype.desconto = function(percent) {
    this.preco -= (this.preco * (percent / 100));
};

const camiseta = new Camiseta('Regata', 7.5, 'Preta');


camiseta.aumento(100);
camiseta.desconto(50);
console.log(camiseta);


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
    
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 11.90, 'Porcelana', 10);
caneca.estoque = '100'
console.log(caneca);
console.log(camiseta);