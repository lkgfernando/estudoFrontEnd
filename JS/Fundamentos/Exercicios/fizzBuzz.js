<<<<<<< HEAD
function fizzBuzz (number) {
  if (typeof number !== 'number') return number
  if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
  if (number % 3 === 0) return 'Fizz'
  if (number % 5 === 0) return 'Buzz'
  return number
}

console.log('a', fizzBuzz('a'))

for (let i = 0 ; i <=  100; i++) {
  console.log(i, fizzBuzz(i))
}
=======

function fizzBuzz (number) {
    let numbers = []
    for(let i = 0 ; i < number ; i++) {
        numbers.push(i)

        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            console.log('Fizz')
        } else if  (numbers[i] % 3 === 0) {
            console.log('Buzz')
        } else if (numbers[i] % 5 === 0) {
            console.log('FizzBuzz')
        } else {
            console.log(numbers[i])
        }
    }

    
}


fizzBuzz(100)
>>>>>>> 95e9031d03950d379407958f2208025a58560fb1
