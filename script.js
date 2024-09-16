let grades = ['A+', 'A', 'FAIL']

/* long version */
let goodGrades = grades.filter((element) => {
    if (element !== 'FAIL') {
        return true
    }
})

/* shorter version */
let goodGradesShort = grades.filter(element => element !== 'FAIL')

/* both print ['A+', 'A'] */
console.log(goodGrades)
console.log(goodGradesShort)