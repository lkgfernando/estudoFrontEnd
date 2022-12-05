function calculatorCashier() {
    return {
        five_cents: document.querySelector('.fivecents'),
        t_five_cents: document.querySelector('.tfivecents'),

        start() {
            this.pressTab()
        },

        pressTab() {
            this.fivecents.addEventListener('keydown', e => {
                if(e.keyCode === 9) {
                    this.calculate()
                }
            })
        },

        calculate() {
            const cFiveCents = 0.05
            let fiveCents = this.fivecents.value
            let tFiveCents = fiveCents * cFiveCents


            this.tfivecents.value = String(tFiveCents)

        
        }

    }
}


const calculator = calculatorCashier()
console.log(calculator.start())

