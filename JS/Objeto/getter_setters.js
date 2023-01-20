function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor
        }

    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 300;
console.log(`${p1.nome} ${p1.estoque} unidades`);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const p2 = criaProduto('Teclado')
console.log(p2.nome)