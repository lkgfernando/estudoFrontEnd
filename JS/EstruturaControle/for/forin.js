const person = {
  firstname: 'Fernando',
  lastname: 'Rodrigues',
  age: 37
}


for(let key in person) {
  console.log(key, person[key] );
}