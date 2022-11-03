function calcImcMain() {
    const form = document.querySelector('.calc-imc')
     

    function receberEventos (evento) {
        evento.preventDefault()
        const imc_weight = evento.target.querySelector('#input-weight')
        const imc_height = evento.target.querySelector('#input-height')
        const weight  = Number(imc_weight.value)
        const height = Number(imc_height.value)
        const imc = getImc(weight, height)
        const nivelImc = getNivelImc(imc)
        const msg = `Seu IMC é ${imc} (${nivelImc})`

        if (!weight) {
            setResult('Peso inválido', false)
            return
        }

        if (!height) {
            setResult('Altura inválido', false)
            return
        }
        

        setResult(msg, true)
        

    } 

    function getNivelImc (imc) {
        const level = ['Abaixo do peso', 'Peoso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if(imc >= 39.9) {
            return level[5]
        } else if (imc >= 34.9) {
            return level[4]
        } else if (imc >= 29.9) {
            return level[3]
        } else if (imc >= 24.9) {
            return level[2]
        } else if (imc >= 18.5) {
            return level[1]
        } else if (imc < 18.5) {
            return level[0]
        }

    }
    
    
    function getImc(weight, height) {
        const imc = weight / height ** 2
        return imc.toFixed(2)
    }

    function setResult (msg, isValid) {
        const calc = document.querySelector('.calc')
        calc.innerHTML = ''
        // Cria HTML
        const p = criaP()

        if (isValid) {
            p.classList.add('result')
        } else {
            p.classList.add('bad')
        }


        p.innerHTML = msg
        calc.appendChild(p)

    }

    function criaP() {
        const p = document.createElement('p')
        return p
    }
    

    form.addEventListener('submit', receberEventos)

}

calcImcMain()