// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

const identitas = [
    {
        nama : 'John',
        umur : 30
    },
    {
        nama : 'dony',
        umur : 24
    },
    {
        nama : 'rama',
        umur : 20
    },
    {
        nama : 'dentol',
        umur : 10
    },
]

const identitas2 = identitas.map(function(umur){
    return umur.umur;
});
