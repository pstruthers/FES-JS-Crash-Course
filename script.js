let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true
    }
})

console.log(newArr) //prints [20, 30, 40]