function Produto (nome, preco) {
  this.nome = nome;
  this.preco = preco;
};

Produto.prototype.desconto = function(percent) {
  this.preco = this.preco - (this.preco * (percent / 100));
};

Produto.prototype.aumento = function(percent) {
  this.preco = this.preco + (this.preco * (percent / 100));
};

const p1 = new Produto('Teclado', 25.50);

p1.desconto(70);
p1.aumento(50);
console.log(p1);

//Literal

const p2 = {
  nome: 'Notebook',
  preco: 1500
};

Object.setPrototypeOf(p2, p1);

p2.desconto(10);

console.log(p2);


const p3 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'Monitor'
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 499
  },
  modelo: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'LG'
  }
} );
p3.aumento(10)
p3.desconto(10)
console.log(p3)



