const names = ['Fernando', 'Rodrigues', 'José']

names.push('Kauan')
names.push('Livia')
names.push('Glacieli')

console.log(names)

const newNames = names.slice(0,-1)

console.log(newNames)

const nameLastName = 'Fernando José Rodrigues'

const second = nameLastName.split(' ')

console.log(second)

const treeExName = [ 'Fernando', 'José', 'Rodrigues' ]
const union = treeExName.join(' ')

console.log(union)