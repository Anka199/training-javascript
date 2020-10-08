// 1. menambah isi array 
var arr1 = []
arr1[0] = "kucing"
arr1[1] = "burung"
arr1[2] = "belalang"

console.log(arr1)

var arr2 = ['kucing', 'burung', 'belalang']
arr2.splice(1, 2, "ayam", "bebek")
    //mengahapus dari index -1 sebanyak 2 elemen, menambahkan elemen ayam dan bebek
console.log(arr2)

//slice(awal, akhir)
//index awal terbawa ke array baru, index akhir tidak terbawa