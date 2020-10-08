function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`)
    }
}

let pagi = ucapkanSalam('pagi')
pagi('Anka')

console.log("add")
let counterOne = 0;

function add() {
    console.log(++counterOne)
}
add()
add()
add()

console.log("stag")

function stag() {
    counterTwo = 0;
    console.log(++counterTwo)
}
stag()
stag()
stag()

console.log("plus")
let plus = function() {
    let counterThree = 0;
    return function() {
        console.log(++counterThree)
    }
}
let a = plus()
a()
a()
a()

console.log("end")
let end = (function() {
    let counter = 0
    return function() {
        console.log(++counter)
    }
})();
counter = 100;
end()
end()
end()