function creatCalculator () {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButton()
            this.pressBackSpace()
            this.pressEnter()
        },


        //Evento de limpar display pelo backSpace
        pressBackSpace(){
            this.display.addEventListener('keydown', e => {
                if(e.keyCode === 8) {
                    e.preventDefault()
                    this.deleteOn()
                }
            })
        },

        //Evento precionando enter
        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.calculate()
                }
            })
        },

        //Realiza calculo
        calculate() {
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
        },

        //Limpar Display
        clearDisplay() {
            this.display.value = ''
        },

        deleteOn() {
            this.display.value = this.display.value.slice(0, -1)
        },

        //Evento de click nos botões
        clickButton() {
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
        },

        btnForDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculator = creatCalculator()
calculator.start()