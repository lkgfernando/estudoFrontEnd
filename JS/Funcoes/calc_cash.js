function cash(fiveCents = 0, tenCentes = 0, twentyFiveCents = 0, fiftyCentes = 0, oneReal = 0, twoReal = 0, fiveReal = 0, tenReal = 0, twentFiveReal = 0, fiftyReal = 0, oneHumdredReal = 0) {
    let calcFull = 0;

    if (fiveCents > 0) calcFull += (fiveCents * 0.05);
    if (tenCentes > 0) calcFull += (tenCentes * 0.10);
    if (twentyFiveCents > 0) calcFull += (twentyFiveCents * 0.25);
    if (fiftyCentes > 0) calcFull += (fiftyCentes * 0.50);
    if (oneReal > 0) calcFull += ( oneReal * 1.00);
    if (twoReal > 0) calcFull += (twoReal * 2.00);
    if (fiveReal > 0) calcFull += (fiveReal * 5.00);
    if (tenReal > 0) calcFull += (tenReal * 10.00);
    if (twentFiveReal > 0) calcFull += (twentFiveReal * 25.00);
    if (fiftyReal > 0) calcFull += (fiftyReal * 50.00);
    if (oneHumdredReal > 0) calcFull += (oneHumdredReal * 100.00);

    return calcFull.toFixed(2)
}





console.log(cash(10,10,10,10,10,10,10,10,10,10,10))

