//grades ==> notas1
const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const lowGrades1 = []

for (let i in grades) {
    if(grades[i] < 7) {
        lowGrades1.push(grades[i])
    }
}

console.log(lowGrades1)

const lowGrades2 = grades.filter(function (grade) {
    return grade < 7
})

console.log(lowGrades2)

const lowGrades3 = grades.filter(grade => grade < 7)

console.log(lowGrades3)