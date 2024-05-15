const subTotal = [1500, 2000, 4000, 19000, 32000];

const total = subTotal.reduce((currentTotal, singleTotal) => {
    return currentTotal + singleTotal
})

console.log(total);