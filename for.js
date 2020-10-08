var jumlahData = 10
var baik = 6

// for (data = 1; data <= baik; data++) {
//     console.log('data ke-' + data + ' baik \n')
// }
// for (data > baik; data <= jumlahData; data++) {
//     console.log('data ke-' + data + ' buruk \n')
// }

for (data = 1; data <= jumlahData; data++) {
    //jika data < 6 dan data bukan sama dengan 5
    if (data <= baik && data !== 5) {
        console.log('data ke-' + data + ' baik \n')
            // jika data 8 atau 10 atau 5
    } else if (data === 8 || data === 10 || data === 5) {
        console.log('data ke-' + data + ' tertahan \n')
            //sisa data
    } else {
        console.log('data ke-' + data + ' buruk \n')
    }
}