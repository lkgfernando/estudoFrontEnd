/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function simpleInterest(capital, interestRate, time) {
    let valueFees = capital *  (interestRate / 100) * time
    let amount = capital + valueFees
    return console.log(amount) 
}


simpleInterest(100, 10, 2)


function compoundInterest(capital, interestRate, time) {
    let amount = capital * (1 + interestRate/100) ** time
    return console.log(amount)
}

compoundInterest(100, 10, 2)
