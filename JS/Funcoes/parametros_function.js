function parms() {
    let total = 0;
    console.log(arguments[0]);

    for (let args of arguments) {
        total += args
    }

    console.log(total)
}

parms(1, 5, 5, 6, 7, 8, 9);


//Testando operação

function sum(a = 1, b = 1, c = 1) {

    console.log(a + b + c);
    console.log(b)
}


sum(1, 2 < 0, 3)


function calc(op, ...num) {
    let acm = 1
    for (let i of num) {
        if (op === '+') acm += i
        if (op === '-') acm -= i
        if (op === '/') acm /= i
        if (op === '*') acm *= i
    }
    console.log(acm)
}

console.log('############')
calc('/', 1500, 2)
calc('*', 20, 30, 40, 50)
calc('-', 20, 30, 40, 50)
calc('+', 20, 30, 40, 50)