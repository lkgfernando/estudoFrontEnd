// Exercício 2 

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago


function valorJantar(valor) {
    let taxaGarcom = valor * (10 / 100);
    let totalConta = valor + taxaGarcom;

    console.log(`Valor do jantar: R$ ${valor.toFixed(2)}`)
    console.log(`Taxa do garcom: R$ ${taxaGarcom.toFixed(2)}`)
    return totalConta.toFixed(2);
}

console.log("Valor total da conta: R$",valorJantar(80));


function contaRestaurante(valorConta) {
    return {
        get totalConta() {
            let taxaGarcom = 0.10;
            let totalConta = valorConta + (valorConta * taxaGarcom);
            return  console.log(`Valor do jantar ${valorConta.toFixed(2).replace('.', ',')}\n Valor taxa garçom ${taxaGarcom.toFixed(2).replace('.',',')}\n Valor total da conta ${totalConta.toFixed(2).replace('.', ',')}`);
        },
        set totalConta(valor) {
            totalConta = valor
        }
    }
}

const mesa01 = contaRestaurante(100)
const mesa02 = contaRestaurante(500)

console.log(mesa01.totalConta, mesa02.totalConta)