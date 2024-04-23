// Contoh 1

// let str = 'lol';
// for (let i = 0; i <= 4; i++){
//     console.log('Outer :', i);
//     for (let j = 0; j < str.length; j++){
//         console.log(' Inner: ', str[j]);
//     }
// }


// Contoh 2

// const huruf = 'abcd';
// for (let i = 1; i <= 10; i++){
//     console.log(`${i}. Soal nomor ${i} :`);
//     for (let j = 0; j < huruf.length; j++){
//         console.log(`   ${huruf[j]}. Pilihan Jawaban`);
//     }
// }

// Mendapatkan Data Dari Nested Array Dengan Nested Loop

const siswa = [
   ['rama', 'budi', 'joko'],
   ['asep', 'jono', 'joni'],
   ['upin', 'ipin', 'opin']
];

for (let i = 0; i < siswa.length; i++){
    const row = siswa[i];
    console.log(`Tempat #${i + 1}`);
    for(let j = 0; j < row.length; j++){
        console.log(`   ${row[j]}`);
}
}