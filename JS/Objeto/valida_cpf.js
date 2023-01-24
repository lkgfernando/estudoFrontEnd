// Exemplo de CPF
// 705.484.450-52  // 070.987.720.03

/*

//PRIMEIRO DIGITO

7    0   5     4    8     4     4    5   0     ** NUMERO DO CPF
X    X   X     X    X     X     X    X   X     ** MULTIPLICAÇÃO
10   9   8     7    6     5     4    3   2     ** PARA ACHAR O PRIMEIRO DIGITO É NECESSÁRIO COMEÇAR DO PRIMEIRO NUMERO DE CPF MULTIPLICANDO POR 10
=    =   =     =    =     =     =    =   =     ** IGUAL
70 + 0 + 40 +  28 + 48 + 20 +   16 + 15  0 ==> 237 **SOMTA TOTAL

FORMULA DO CALCUL ==> 11 - (SOMA TOTAL % TOTAL DIGITOS CPF) = RESULTADO DO CALCULO
** SE O NÚMERO FOR MAIOR QUE 9 É CONSIDERADO 0
//SEGUNDO DIGITO
7    0   5     4    8     4     4    5   0    5     ** NUMERO DO CPF
X    X   X     X    X     X     X    X   X    X     ** MULTIPLICAÇÃO
11   10  9     8    7     6     5    4   3    2     ** PARA ACHAR O PRIMEIRO DIGITO É NECESSÁRIO COMEÇAR DO PRIMEIRO NUMERO DE CPF MULTIPLICANDO POR 10
=    =   =     =    =     =     =    =   =          ** IGUAL
77 + 0 + 45 +  32 + 56 +  24 +  20 + 20  0  + 10 ==> 284 **SOMTA TOTAL

FORMULA DO SEGUNDO DIGITO ==> 11 - (SOMA TOTAL % TOTAL DE DIGITOS) = RESULTADO DO CALCULO
** SE O NÚMERO FOR MAIOR QUE 9 É CONSIDERADO 0

*/
// console.log(11 - (237 % 11)); // calculo do primeiro digito
// console.log(11 - (284 % 11)); // calcula segundo digito do CPF

// let cpf = '705.484.450-52';
// let numeroCpf = cpf.replace(/\D+/g, '');
// let cpfArray = Array.from(numeroCpf);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0)) 

function ValidaCpf(cpf){

    Object.defineProperty(this, 'formatCpf', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    });
};

ValidaCpf.prototype.valida = function() {
   
    if(typeof this.formatCpf === 'undefined') return false;
    if(this.formatCpf.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfParcial = this.formatCpf.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    
    return novoCpf === this.formatCpf;

};

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    
    const digito = (11 - (total % 11));

    return digito > 9 ? '0' : String(digito);
};

ValidaCpf.prototype.isSequencia = function() {
    const sequencia = this.formatCpf[0].repeat(this.formatCpf.length);
    return sequencia === this.formatCpf;
}

const cpf = new ValidaCpf('315.527.438-50');

if(cpf.valida()) {
    console.log('Cpf valido');
} else {
    console.log('Cpf inválido');
}






