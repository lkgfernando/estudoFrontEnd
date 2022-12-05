function calculatorCashier() {
    return {
        five_cents: document.querySelector('.five-cents'),
        t_five_cents: document.querySelector('.tfivecents'),

        start() {
            this.pressTab()
        },

        pressTab() {
            this.five-cents.addEventListener('keydown', e => {
                if(e.keyCode === 9) {
                    this.calculate()
                }
            })
        },

        calculate() {
            const cFiveCents = 0.05
            let fiveCents = this.five_cents.value
            let tFiveCents = fiveCents * cFiveCents


            this.tfivecents.value = String(tFiveCents)

        
        }

    }
}


const calculator = calculatorCashier()
calculatorCashier.start()