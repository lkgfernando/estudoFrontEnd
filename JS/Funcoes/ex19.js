/*
​19) ​O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function restaurantOrder(cod, amount) {
    switch(cod) {
        case 100:
            return console.log(`Total do pedido ${3.00 * amount}`)
        case 200:
            return console.log(`Total do pedido ${4.00 * amount}`)
        case 300:
            return console.log(`Total do pedido ${5.50 * amount}`)
        case 400:
            return console.log(`Total do pedido ${7.50 * amount}`)
        case 500:
            return console.log(`Total do pedido ${3.50 * amount}`)
        case 600:
            return console.log(`Total do pedido ${2.80 * amount}`)
        default:
            return console.log('Produto não exixte!')
    }
}

restaurantOrder(100,5)
restaurantOrder(200,5)
restaurantOrder(300,5)
restaurantOrder(400,5)
restaurantOrder(500,5)
restaurantOrder(600,5)
restaurantOrder(700,5)