function aleatorio(min, max) {
     min *= 1000;
     max *= 1000;
     return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO:'))
        setTimeout(() => {
        resolve(msg);
    }, tempo);

    });

}

esperaAi('Frase1', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase2', aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return resposta;
        
    })
    .catch(e => {
        console.log('Erro', e);
    });



console.log();