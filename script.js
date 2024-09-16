let dollars = [1, 5, 10, 3]

/* long version */
let cents = dollars.map((element) => {
    return element * 100
})

/* short version */
let centsShort = dollars.map(element => element * 100)

//both print [100, 500, 1000, 300]
console.log(cents)
console.log(centsShort)