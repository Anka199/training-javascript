const tampilNama = nama => `Halo ${nama}`;
console.log(tampilNama("Anka"))

const salam = (nama, waktu) => `Halo ${nama}, Selamat ${waktu}`
console.log(salam("Anka", "pagi"))

const mahasiswa = ["anka abdullah", "mia sulmiatussaadah", "dika pratama", "widia sari"]
const hitungHuruf = mahasiswa.map(nama => nama.length);
console.log(hitungHuruf)

const jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
console.log(jumlahHuruf)
console.table(jumlahHuruf)