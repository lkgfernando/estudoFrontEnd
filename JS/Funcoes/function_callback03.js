//Exemplo de callback no browse

document.getElementsByTagName('body')[0].onclick = function (e) {
    const el = e.target
    console.log(`O evento foi disparado ${el}` )
}