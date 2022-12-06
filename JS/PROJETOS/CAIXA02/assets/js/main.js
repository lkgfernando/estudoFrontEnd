function calculatorCashier() {
    return {
        clear_btn: document.querySelector('.btn-clear'),
        five_cents: document.querySelector('.fivecents'),
        t_five_cents: document.querySelector('.tfivecents'),
        ten_cents: document.querySelector('.ten-cents'),
        t_ten_cents: document.querySelector('.t-ten-cents'),
        twenty_five_cents: document.querySelector('.twenty-five-cents'),
        t_twenty_five_cents: document.querySelector('.t-twenty-five-cents'),
        t_total: document.querySelector('.t-total'),
        t_fifty_cents: document.querySelector('.t-fifty-cents'),
        fifty_cents: document.querySelector('.fifty-cents'),
        one_real: document.querySelector('.one-real'),
        t_one_real: document.querySelector('.t-one-real'),
        two_real: document.querySelector('.two-real'),
        t_two_real: document.querySelector('.t-two-real'),
        five_real: document.querySelector('.five-real'),
        t_five_real: document.querySelector('.t-five-real'),
        ten_real: document.querySelector('.ten-real'),
        t_ten_real: document.querySelector('.t-ten-real'),
        twenty_five_real: document.querySelector('.twenty-five-real'),
        t_twenty_five_real: document.querySelector('.t-twenty-five-real'),
        fifty_real: document.querySelector('.fifty-real'),
        t_fifty_real: document.querySelector('.t-fifty-real'),
        one_hundred_real: document.querySelector('.one-hundred-real'),
        t_one_hundred_real: document.querySelector('.t-one-hundred-real'),

        start() {
            this.pressTab()
            this.clearFields()
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

                this.twenty_five_cents.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.fifty_cents.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.one_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.two_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.five_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.ten_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.twenty_five_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.fifty_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
                this.one_hundred_real.addEventListener('keydown', e => {
                    if(e.keyCode === 9) {
                        this.calculate()
                    }
                })
        },

        calculate() {
        
            let tFiveCents = (this.five_cents.value * 0.05)
            let tTenCents = (this.ten_cents.value * 0.10)
            let tTwentFiveCents = (this.twenty_five_cents.value * 0.25)
            let tFiftyCents = (this.fifty_cents.value * 0.50)
            let tOneReal = (this.one_real.value * 1.00)
            let tTwoReal = (this.two_real.value * 2.00)
            let tFiveReal = (this.five_real.value * 5.00)
            let tTenReal = (this.ten_real.value * 10.00)
            let tTwentFiveReal = (this.twenty_five_real.value * 25.00)
            let tFiftyReal = (this.fifty_real.value * 50.00)
            let tOneHundred = (this.one_hundred_real.value * 100.00)
            let tTotal = (tFiveCents + tTenCents + tTwentFiveCents + tFiftyCents + tTwoReal + tOneReal + tFiveReal + tTenReal + tTwentFiveReal + tFiftyReal + tOneHundred)


            this.t_five_cents.innerHTML = tFiveCents.toFixed(2)
            this.t_ten_cents.innerHTML = tTenCents.toFixed(2)
            this.t_twenty_five_cents.innerHTML = tTwentFiveCents.toFixed(2)
            this.t_fifty_cents.innerHTML = tFiftyCents.toFixed(2)
            this.t_one_real.innerHTML = tOneReal.toFixed(2)
            this.t_two_real.innerHTML = tTwoReal.toFixed(2)
            this.t_five_real.innerHTML = tFiveReal.toFixed(2)
            this.t_ten_real.innerHTML = tTenReal.toFixed(2)
            this.t_twenty_five_real.innerHTML = tTwentFiveReal.toFixed(2)
            this.t_fifty_real.innerHTML = tFiftyReal.toFixed(2)
            this.t_one_hundred_real.innerHTML = tOneHundred.toFixed(2)
            this.t_total.innerHTML = tTotal.toFixed(2)

            
            
        },

        clearFields() {
            document.addEventListener('click', e => {
                const el = e.target
                
                if(el.classList.contains('btn-clear')) {
                    this.clearValue()
                    this.calculate()
                }
            })
        },

        clearValue() {
            this.five_cents.value = ''
            this.t_five_cents.innerHTML = ''
            this.ten_cents.value = ''
            this.t_ten_cents.innerHTML = ''
            this.twenty_five_cents.value = ''
            this.t_twenty_five_cents.innerHTML = ''
            this.t_fifty_cents.innerHTML = ''
            this.fifty_cents.value = ''
            this.one_real.value = ''
            this.t_one_real.innerHTML = ''
            this.two_real.value = ''
            this.t_two_real.innerHTML = ''
            this.five_real.value = ''
            this.t_five_real.innerHTML = ''
            this.ten_real.value = ''
            this.t_ten_real.innerHTML = ''
            this.twenty_five_real.value = ''
            this.t_twenty_five_real.innerHTML = ''
            this.fifty_real.value = ''
            this.t_fifty_real.innerHTML = ''
            this.one_hundred_real.value = ''
            this.t_one_hundred_real.innerHTML = ''

            
        }

    }
}


const calculator = calculatorCashier()

calculator.start()

