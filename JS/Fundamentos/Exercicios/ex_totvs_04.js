
let vetor = [10, 50, 15, 100, 09]
let semvalor
let achou = true


while(achou) {
    achou = false

    for(let i = 0 ; i < 4 ; i++){
        if(vetor[i] > vetor[i + 1]) {
            semvalor = vetor[i]
            vetor[i] = vetor[i + 1]
            vetor[i + 1] = semvalor
            achou = true
        }
    }
}

for(let i = 0 ; i < 5 ; i++) {
    console.log(vetor[i])
}