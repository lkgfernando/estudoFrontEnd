function global (){
    const form = document.querySelector('.form-cad')
    const result = document.querySelector('.result')

    // form.onsubmit = function (evento) {
    //     evento.preventDefault()
        
    // }

    const people = []
    
    function recebeEventoForm (evento) {
        evento.preventDefault()
        const name = form.querySelector('.name')
        const sobrenome = form.querySelector('.sec-name')
        const peso = form.querySelector('.weight')
        const altura = form.querySelector('.p-height')
        
        people.push({
            nome: name.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura : altura.value
        })       
        
        console.log(people)

        result.innerHTML += `<p> ${name.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`

    }


    form.addEventListener( 'submit', recebeEventoForm)
}

global()

