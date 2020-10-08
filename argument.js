function tambah() {
    hasil = 0;
    for (i = 0; i < arguments.length; i++) {
        hasil += arguments[i]
    }
    console.log(hasil)
}
tambah(1, 2, 3)