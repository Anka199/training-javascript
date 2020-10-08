var siswa = {
    nama: "Anka Abdullah",
    umur: 24,
    alamat: {
        kecamatan: "Bogor Barat",
        kota: "Bogor",
        kodePos: 16117
    }
}

var mhs1 = {
    nama: "Anka Abdullah",
    fakultas: "ekonomi",
    umur: 24
}

function tambahmhs(nama, fakultas, umur) {
    var mhs = {}
    mhs.nama = nama;
    mhs.fakultas = fakultas;
    mhs.umur = umur;
    return mhs
}

var mhs2 = tambahmhs("budi", "teknik", 25)
var mhs3 = tambahmhs("indah", "agama", 23)

//constructor

function mahasiswa(nama, fakultas, umur) {
    this.nama = nama;
    this.fakultas = fakultas;
    this.umur = umur;
}

var mhs4 = new mahasiswa("Andi", "ekonomi", 25)