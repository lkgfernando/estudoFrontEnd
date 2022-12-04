function sum (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new ReferenceError('x e y não são numéricas ')
  }
  return x + y
}


try {

  console.log(sum(1,2))
  console.log(sum('a',2))

} catch (err) {
  console.log( 'Erro de soma impossivel fazer a soma !!Atenção!!!')
}
