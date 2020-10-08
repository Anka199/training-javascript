function tugasKuliah(mataKuliah, selesai) {
    console.log(`pengerjaan tugas mata kuliah ${mataKuliah}`);
    selesai()
}
selesai = () => {
    console.log('tugas selesai')
}

tugasKuliah('pancasila', selesai)