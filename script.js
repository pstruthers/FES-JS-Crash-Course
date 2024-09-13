let cash = 50
let price = 40
let isStoreOpen = true

let str = isStoreOpen && cash >= price ? 'give receipt' : 'do not give receipt'
console.log(str)