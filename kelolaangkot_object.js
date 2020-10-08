var angk1 = {
    supir: "mang Tono",
    Trayek: ["loji", "sbj"],
    penumpang: [],
    kas: 0
}

function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        if (penumpang.length == 0) {
            this.penumpang.push(namaPenumpang)
            return this.penumpang
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (penumpang[i] == undefined) {
                    penumpang[i] = namaPenumpang
                    return this.penumpang
                } else if (i == penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang)
                    return this.penumpang
                }
            }
        }
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (penumpang.length === 0) {
            alert("penumpang kosong")
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (penumpang[i] == namaPenumpang) {
                    penumpang[i] = undefined
                    this.kas += bayar
                    return 'kas masuk ' + this.kas + ', penumpang : ' + this.penumpang
                } else {
                    alert("tidak ada penumpang bernama " + namaPenumpang)
                }
            }
        }
    }
}

var angk2 = new Angkot("mang tono", ["loji", "sbj"], [], 0)
var angk2 = new Angkot("hardi", ["baranang", "siang"], [], 0)