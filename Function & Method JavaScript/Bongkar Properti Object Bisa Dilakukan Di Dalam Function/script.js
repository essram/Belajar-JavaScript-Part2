const siswa = [
    {
        nama : 'Budi',
        kelas : 10,
        predikat : 'a'
    },
    {
        nama : 'asep',
        kelas : 10,
        predikat : 'a'
    },
    {
        nama : 'joko',
        kelas : 10,
        predikat : 'a'
    }
];

const Siswa = siswa.map(({nama, kelas, predikat}) => {
    return `${nama}, ${kelas}, ${predikat}`;
})

console.log(Siswa)