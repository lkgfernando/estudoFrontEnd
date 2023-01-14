/* 
08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

*/


let stringPunctuation = "30, 40, 4, 51, 25, 0, 38, 56, 0"

function evaluateScore(stringPunctuation) {
        let punctuation = stringPunctuation.split(", ")
        let qtdBreakRecords = 0
        let worstGame = 1
        let highestScore = punctuation[0]
        let lowestScore = punctuation[0]

        for (let i = 1 ; i < punctuation.length; i++) {
            if(punctuation[i] > highestScore) {
                highestScore = punctuation[i]
                qtdBreakRecords++
            } else if(punctuation[i] < lowestScore) {
                lowestScore = punctuation[i]
                worstGame = i + 1
            }
        }

        return [qtdBreakRecords, worstGame]
}



console.log(evaluateScore(stringPunctuation))


