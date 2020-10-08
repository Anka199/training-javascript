const mahasiswa = [{
        nama: 'Anka Abdullah',
        email: 'ankabdullah.bogor@gmail.com',
        hp: '0895-0520-6416'
    },
    {
        nama: 'Annisa',
        email: 'anisawulan@gmail.com'
    },
    {
        nama: 'reki',
        emial: 'reki@asiamail.com'
    }, {
        nama: 'Raharjo',
        email: 'harjo.sleman@yahoo.com'
    }
]

//nagaimana memunculkan nomor hp, sedangkan hanya 1 orang yang punya no hp
const el = `<div class="mhs">
${mahasiswa.map(m=>`<ul>
<li>nama : ${m.nama}</li>
<li>email : ${m.email}</li>
${m.hp? `<li>nomor hp : ${m.hp}</li>`: ''}
</ul><br>`).join('')}</div>`

document.getElementById("el").innerHTML= el;

const mhs = {
    nama: 'Anka Abdullah',
    semester: 5,
    mataKuliah:['Rekayasa Web', 
                'Abalisis dan perancang Sistem Informasi',
                'pemograman sistem Interaktif',
                'perancangan sistem berorientasi Object']
};
function cetakMataKuliah(mataKuliah){
    return `<ol>${mataKuliah.map(mk=>`<li>${mk}</li>`).join('')}</ol>`
}

const cetak= `<div>
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.getElementById("cetak").innerHTML= cetak;

//tagged template literals
const nama = 'Anka Abdullah'
const umur = 24
const email = 'Ankabdullah.bogor@gmail.com'

function coba(string, ...values){
    // let result = ''
    // string.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`
    // });
    // return result
    
    //dengan reduce
    return string.reduce((result, str, i) => `${result}${str}<span class="highlights">${values[i] || ''}</span>`,'')
}

const str = coba`Halo, nama saya ${nama}, umur saya ${umur},<br> silakan hubungi email saya di ${email}.`
document.getElementById("tagged").innerHTML = str;