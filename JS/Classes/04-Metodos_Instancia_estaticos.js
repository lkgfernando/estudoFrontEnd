class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static soma(x, y) {
        return x + y;
    }
}


console.log(`>>>>>>>>>> 04 Metodos Instancia estaticos <<<<<<<<<<<<`);

const controle1 = new ControleRemoto('Asus');

console.log(controle1);

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
controle1.diminuirVolume();

console.log(ControleRemoto.soma(10,10));

console.log(controle1);

