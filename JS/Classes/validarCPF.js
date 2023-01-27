class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfFormatado', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        }); 
    }

    vefificaSequencia() {
        return this.cpfFormatado.charAt(0).repeat(this.cpfFormatado.length) === this.cpfFormatado;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfFormatado.slice(0, -2);
        let digito1 = ValidaCPF.geraDigito(cpfParcial);
        let digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
     }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;
        for(let stringNum of cpfParcial) {
            //console.log(stringNum, reverso);
            total += reverso * Number(stringNum);
            reverso--;
        }
        
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0';
        //console.log(total);
    }

    valida() {
        if(!this.cpfFormatado) return false;
        if(typeof this.cpfFormatado !== 'string') return false;
        if(this.cpfFormatado.length !== 11) return false;
        if(this.vefificaSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfFormatado;
    }
}

//const validaCpf1 = new ValidaCPF('999.999.999-99');
const validaCpf = new ValidaCPF('315.527.439-70');
//console.log(validaCpf1.valida());

if(validaCpf.valida()) {
    console.log(`CPF é valido.`);
} else {
    console.log(`CPF é inválido.`);
}