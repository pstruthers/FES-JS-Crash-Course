let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen === true) { /* evaluates to true && false */
    console.log('print the receipt')
}
else if (cash >= price || isStoreOpen === true) { /* evaluates to true || false */
    console.log('you have enough cash, but store is closed') /* prints */
}