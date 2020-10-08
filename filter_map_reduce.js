const numb = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9, 3]

const newNumb = []

for (let i = 0; i < numb.length; i++) {
    if (numb[i] >= 3) {
        newNumb.push(numb[i])
    }
}
console.log(newNumb)

//atau
const newNumb2 = numb.filter(a => a >= 3)
console.log(newNumb2)

//dengan map
const newNumb3 = numb.map(a => a + 2)
    .reduce((acc, cur) => acc + cur)
console.log("dengan map, tiap angka +2 dan di jumlah")
console.log(newNumb3)