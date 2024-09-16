let arr = [1, 4, 9, 16]

/* long version */
let newArray = arr.map((element) => {
    console.log(element)
    return 'dog'
})

/* shorthand version */
let newArrayShort = arr.map(element => 'dog')

// both print ['dog', 'dog', 'dog', 'dog']
console.log(newArray)
console.log(newArrayShort)