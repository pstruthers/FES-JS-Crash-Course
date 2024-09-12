let cash = 35
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars in change`)
}
else if (cash === price) {
    console.log("you paid the exact amount - have a nice day!")
}
else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}