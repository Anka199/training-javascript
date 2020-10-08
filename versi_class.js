class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi
        console.log(`energi ${this.nama} adalah : ${this.energi}`)
    }
    main(jam) {
        this.energi -= jam;
        console.log(`energi ${this.nama} adalah : ${this.energi}`)
    }
}

let anka = new Mahasiswa("Anka Abdullah", 24)