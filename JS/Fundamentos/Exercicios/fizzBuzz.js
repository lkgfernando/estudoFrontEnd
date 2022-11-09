
function fizzBuzz (number) {
    let numbers = []
    for(let i = 0 ; i < number ; i++) {
        numbers.push(i)

        if (numbers[i] % 3 === 0) {
            console.log('Fizz')
        } else if (numbers[i] % 5 === 0) {
            console.log('Buzz')
        } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            console.log('FizzBuzz')
        } else {
            console.log(numbers[i])
        }
    }

    
}


fizzBuzz(100)