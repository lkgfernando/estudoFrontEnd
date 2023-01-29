const pessoas = [
    { id: 3, nome: 'Fernando' },
    { id: 2, nome: 'Kauan' },
    { id: 1, nome: 'Livia Maria' },
    { id: 0, nome: 'Glacieli'}

];


const novasPessoas = {};

for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
};

console.log(novasPessoas);

console.log(`>>>>>>>>>>>> Exemplo com Map <<<<<<<<<<<<<<<<`);

const novasPessoas2 = new Map();

for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas2.set(id, {...pessoa });
};

console.log(novasPessoas2)


