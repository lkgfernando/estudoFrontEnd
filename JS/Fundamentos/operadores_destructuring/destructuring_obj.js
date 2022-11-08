const person = {
    firstName: 'Fernando',
    lastname: 'Rodrigues',
    age: 30,
    address: {
        road: 'Madalena',
        numbers: 61
    }
}


// Atribuição via desestruturação

const {address:{road, numbers}} = person

console.log(road, numbers)