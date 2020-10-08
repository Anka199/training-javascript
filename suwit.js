var p = prompt('pilih Gajah, orang semut ??')

var comp = Math.random()

if (comp < 1 / 3) {
    comp = 'gajah'
} else if (comp < 2 / 3 && comp > 1 / 3) {
    comp = 'orang'
} else {
    comp = 'semut'
}
suwit = console.log(comp)

if (suwit == p) {
    alert(`Komputer memilih ${suwit} kamu menang`)
} else [
    alert(`Komputer memilih ${suwit} kamu KALAH`)
]