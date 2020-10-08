var penumpang = ["maya", undefined, "tatu"]

function tambahPenumpang(nama, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(nama)
        return penumpang
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = nama
                return penumpang
            } else if (i == penumpang.length - 1) {
                penumpang.push(nama)
                return penumpang
            } else if (penumpang[i] == nama) {
                return "penumpang sudah ada"
            }
        }
    }
}

console.log(tambahPenumpang("budi", penumpang))
console.log(tambahPenumpang("budi", penumpang))