function first_main () {
    const form = document.querySelector('.cashier')
    const dice = document.querySelector('.dice')

    
    const cash = []

    function receberEventoForm (evento) {
        evento.preventDefault()
        const date = document.querySelector('#date')
        const type = document.querySelector('#type-operacao')
        const five_centes = document.querySelector('#five-centes')
        const ten_centes = document.querySelector('#ten-centes')
        const twent_five_centes = document.querySelector('#twenty-five-centes')
        const fifty_centes = document.querySelector('#fifty-centes')
        const one_real = document.querySelector('#one-real')
        const two_real = document.querySelector('#two-real')
        const five_real = document.querySelector('#five-real')
        const ten_real = document.querySelector('#ten-real')
        const twenty_five_real = document.querySelector('#twenty-five-real')
        const fifty_real = document.querySelector('#fifty-real')
        const one_hundred = document.querySelector('#one-hundred-real')
        
        cash.push({
            data: date.value,
            tipo: type.value,
            cinco_centavos: five_centes.value,
            dez_centavos: ten_centes.value,
            vinte_cinco_centavos: twent_five_centes.value,
            cinquenta_centavos: fifty_centes.value,
            um_real: one_real.value,
            dois_reais: two_real.value,
            cinco_reais: five_real.value,
            dez_reais: ten_real.value,
            vinte_cinco_reais: twenty_five_real.value,
            cinquenta_reais: fifty_real.value,
            cem_reais: one_hundred.value 
        })

        console.log(cash)

        dice.innerHTML += `<p> ${date.value} ${type.value} ${five_centes.value} ${ten_centes.value} ${twent_five_centes.value} ${fifty_centes.value} ${one_real.value} ${two_real.value} ${five_real.value} ${ten_real.value} ${twenty_five_real.value} ${fifty_real.value} ${one_hundred.value}`
    }

    

    form.addEventListener('submit', receberEventoForm)
}


first_main()