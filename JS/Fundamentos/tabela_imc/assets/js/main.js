function calcImcMain() {
    const form = document.querySelector('.calc-imc')
    const calc = document.querySelector('.calc')

    const amrImc = []

    function calcImc(weight, height) {
        return  weight / height
    }

    function receberEventos (evento) {
        evento.preventDefaut()

        const imc_weight = document.querySelector('#input-weight')
        const imc_height = document.querySelector('#input-height')


        amrImc.push({
            peso: imc_weight.value,
            altura: imc_height.value
        })

         
       calc.innerHTML +=  `<p>${calcImc(peso.value, altura.value)}</p>`

    }

    form.addEventListener('submit', receberEventos)

}


calcImcMain()