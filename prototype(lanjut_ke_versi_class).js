function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    console.log(`energi ${this.nama} adalah : ${this.energi}`)
}
Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    console.log(`energi ${this.nama} adalah : ${this.energi}`)
}
let anka = new Mahasiswa("Anka Abdullah", 24)