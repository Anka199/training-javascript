//konsep this pada arrow function
const box = document.querySelector('.box')
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]; //membalik
    }

    this.classList.toggle(satu);
    //pakai arrow function, karna pakai function seperti di atas tidak bisa
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})

//fungsi toggle menghapus dan menambahkan class saat di klik