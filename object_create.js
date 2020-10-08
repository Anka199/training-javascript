const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi
        console.log(`Total energi ${this.nama} adalah ${this.energi}`)
    },
    main: function(jam) {
        this.energi -= jam;
        console.log(`Total energi ${this.nama} adalah ${this.energi}`)
    }
}

function mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa)
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    return mahasiswa
}

let mahasiswa1 = mahasiswa("dadang", 15)