let num = Number(prompt("Digite um valor válido: "))
const numeroTitulo = document.getElementById('number-title')
const numberDescription = document.getElementById('text')

numeroTitulo.innerHTML = num
numberDescription.innerHTML += `<p> Raiz quadrada de ${num} é : <strong> ${num * (1 / 2)} </strong></p>`
numberDescription.innerHTML += `<p> ${num} é inteiro? <strong> ${Number.isInteger(num)} </strong></p>`
numberDescription.innerHTML += `<p> É NaN? <strong> ${Number.isNaN(num)} </strong> </p>`
numberDescription.innerHTML += `<p> Arredondamento para baixo: <strong> ${Math.floor(num)} </strong> </p>`
numberDescription.innerHTML += `<p> Arredondamento para cima: <strong> ${Math.ceil(num)} </strong> </p>`
numberDescription.innerHTML += `<p> Com duas casas decimais: <strong> ${num.toFixed(2)} </strong> </p>`
