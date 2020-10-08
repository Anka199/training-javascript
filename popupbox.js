alert('selamat datang')

var lagi = true

while (lagi) {
    var nama = prompt('masukan nama anda')
    alert('hai' + nama)

    lagi = confirm('ubah nama anda?')
}
//while akan berhenti ketika lagi = false yakni ketika tombol cancel pada confirm ditekan
alert('terimakasih...')