
const nome = prompt('Digite seu nome: ')

document.body.innerHTML += `Seu nome é: <strong> ${nome} </strong><br />`
document.body.innerHTML += `Seu nome tem <strong> ${nome.length}  </strong>letras <br />`
document.body.innerHTML += `A segunda letra do do seu nome é<strong> ${nome.charAt(1)} </strong> <br />`
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome?<strong> ${nome.indexOf('a')} </strong> <br />`
document.body.innerHTML += `Qual o ultimo indice da letra a do seu nome <strong>${nome.lastIndexOf('a')} </strong><br />`
document.body.innerHTML += `As útimas 3 letras do seu nome são <strong>${nome.slice(-3)} <br />`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}  </strong> <br />`
document.body.innerHTML += `Seu nome com letras maiúscula: <strong>${nome.toUpperCase()} </strong> <br />`
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()} </strong>`