const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

const [a, b, c, ...d] = numbers

console.log(b,c)
console.log(d) // resto



// ...rest, ... spread
//               [      0     ], [   1    ], [   2    ]      
//                  0    1   2    0  1  2     0 , 1, 2
const numbers02 = [[10, 20, 30], [40,50,60], [70,80,90]]

const [,,[,eighty,]] = numbers02
const [list1, list2, list3] = numbers02

console.log(eighty)
console.log(list2[1])