function CreatCalculator () {
        this.display = document.querySelector('.display')

        this.start = () => {
            this.clickButton()
            this.pressBackSpace()
            this.pressEnter()
        }


        //Evento de limpar display pelo backSpace
        this.pressBackSpace = () => {
            this.display.addEventListener('keydown', e => {
                if(e.keyCode === 8) {
                    e.preventDefault()
                    this.deleteOn()
                }
            })
        }

        //Evento precionando enter
        this.pressEnter = () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.calculate()
                }
            })
        }

        //Realiza calculo
        this.calculate = () => {
            let calculation = this.display.value

            try {
                calculation = eval(calculation)

                if(!calculation) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(calculation)

            } catch (e) {
                alert('Conta inválida')
                return
            }
        }

        //Limpar Display
        this.clearDisplay = () => {
            this.display.value = ''
        }

        this.deleteOn = () => {
            this.display.value = this.display.value.slice(0, -1)
        }

        //Evento de click nos botões
        this.clickButton = () => {
            document.addEventListener('click', e => {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-eq')) {
                    this.calculate()
                }
                if(el.classList.contains('btn-del')) {
                    this.deleteOn()
                }

                this.display.focus()
            })
        }

        this.btnForDisplay = (valor) => {
            this.display.value += valor
        }
    }

const calculator =  new CreatCalculator()
calculator.start()