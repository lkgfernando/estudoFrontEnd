const numbers = []

let limitNumbers = 100

for (let i = 0 ; i <= limitNumbers ; i++) {
    numbers.push(i)
    
}

console.log(numbers)


for (let i of numbers) {
   
    if (numbers[i] % 2 === 0) {
        continue
    }

    console.log(numbers[i])
}


numbers.forEach(function(value) {

    if (value === 10) {
        console.log("Localizado")

    }
})

for (let i of numbers) {
    
    if (numbers[i] === 30) {
        console.log('####################')
        console.log(`Localizado o valor ${numbers[i]}`)
        break
    }
}


