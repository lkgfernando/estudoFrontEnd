const sum = function(x, y) {
    return x + y
}


const printResult = function(a, b, operation = sum) {
    console.log(operation(a, b))
}

printResult(5, 5)
printResult(3, 4, sum)

printResult(3, 4, function(x, y) {
    return x - y
})

printResult(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(msg) {
        console.log(msg)
    }
}


pessoa.falar('Olá meu nome é fernando')