/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/


function withdrawMoney(value) {
    let ballots1 = 0
    let ballots5 = 0
    let ballots10 = 0
    let ballots50 = 0
    let ballots100 = 0
    let noteValue = calculateNoteValue(value)

    while(value >= noteValue) {
        if(noteValue === 100) {
            value -= 100
            ballots100++
        } else if(noteValue === 50) {
            value -= 50
            ballots50++
        } else if(noteValue === 10) {
            value -= 10
            ballots10++
        } else if(noteValue === 5) {
            value -= 5
            ballots5++
        } else if(noteValue === 1) {
            value -= 1
            ballots1++
        }

        noteValue = (calculateNoteValue(value))
    }

    return result(ballots100, ballots50, ballots10, ballots5, ballots1)

}

function calculateNoteValue(value) {
    if(value >= 100) {
        return 100
    } else if(value >= 50) {
        return 50
    } else if(value >= 10) {
        return 10
    } else if(value >= 5) {
        return 5
    } else if(value >= 1) {
        return 1
    }
}

function result(ballots100, ballots50, ballots10, ballots5, ballots1) {
    let result = ''

    if(ballots100 > 0) {
        result += `${ballots100} nota(s) de R$ 100. `
    }
    
    if(ballots50 > 0) {
        result += `${ballots50} nota(s) de R$ 50. `
    }

    if(ballots10 > 0) {
        result += `${ballots10} nota(s) de R$ 10. `
    }

    if(ballots5 > 0) {
        result += `${ballots5} nota(s) de R$ 5. `
    }

    if(ballots1 > 0) {
        result += `${ballots1} nota(s) de R$ 1. `
    }

    return result
}

console.log(withdrawMoney(423))