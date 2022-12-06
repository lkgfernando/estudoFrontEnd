function calculatorCashier() {
    return {
        five_cents: document.querySelector('.fivecents'),
        t_five_cents: document.querySelector('.tfivecents'),
        ten_cents: document.querySelector('.ten-cents'),
        t_ten_cents: document.querySelector('.t-ten-cents'),

        start() {
            this.pressTab()
        },

        pressTab() {
            this.five_cents.addEventListener('keydown', e => {
                if(e.keyCode === 9) {
                    this.calculate()
                }
            })
                this.ten_cents.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
        },

        calculate() {
        
            let tFiveCents = (this.five_cents.value * 0.05)
            let tTenCents = (this.ten_cents.value * 0.10)


            this.t_five_cents.innerHTML = tFiveCents.toFixed(2)
            this.t_ten_cents.innerHTML = tTenCents.toFixed(2)

            
            
        }

    }
}


const calculator = calculatorCashier()

calculator.start()

